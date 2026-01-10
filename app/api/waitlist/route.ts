import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 5;
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");
const canonicalUrl = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
const logoUrl =
  process.env.EMAIL_LOGO_URL ??
  (canonicalUrl ? `${canonicalUrl}/FrameSense_Logo_PNG_ForBlackBGR.png` : "");

type RateLimitEntry = { count: number; resetAt: number };
const globalForRateLimit = globalThis as { waitlistRateLimit?: Map<string, RateLimitEntry> };
const rateLimitStore =
  globalForRateLimit.waitlistRateLimit ?? new Map<string, RateLimitEntry>();

globalForRateLimit.waitlistRateLimit = rateLimitStore;

function isValidEmail(value: unknown): value is string {
  return typeof value === "string" && EMAIL_REGEX.test(value.trim());
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildEmailHtml(email: string) {
  const safeEmail = escapeHtml(email);
  const logoHref = canonicalUrl || logoUrl;
  const logoMarkup = logoUrl
    ? `
      <a href="${logoHref}" style="display: inline-block; margin-bottom: 16px;">
        <img src="${logoUrl}" alt="FrameSense logo" width="160" height="35" style="display: block; border: 0; outline: none;" />
      </a>
    `
    : "";
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
      ${logoMarkup}
      <h1 style="font-size: 20px; margin: 0 0 12px;">You're on the FrameSense waitlist</h1>
      <p style="margin: 0 0 12px;">
        Thanks for joining! We will reach out when early access opens.
      </p>
      <p style="margin: 0 0 12px;">
        Signed up with: <strong>${safeEmail}</strong>
      </p>
      <p style="margin: 0;">
        FrameSense team
      </p>
    </div>
  `;
}

function getClientIp(req: Request) {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  return req.headers.get("x-real-ip") ?? "unknown";
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const entry = rateLimitStore.get(key);

  if (!entry || entry.resetAt <= now) {
    const resetAt = now + RATE_LIMIT_WINDOW_MS;
    rateLimitStore.set(key, { count: 1, resetAt });
    return { ok: true, remaining: RATE_LIMIT_MAX - 1, resetAt };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { ok: false, remaining: 0, resetAt: entry.resetAt };
  }

  entry.count += 1;
  rateLimitStore.set(key, entry);
  return { ok: true, remaining: RATE_LIMIT_MAX - entry.count, resetAt: entry.resetAt };
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const emailFrom = process.env.EMAIL_FROM;
  const databaseUrl = process.env.DB_URL;

  if (!databaseUrl) {
    return Response.json(
      { error: "Database is not configured." },
      { status: 500 }
    );
  }

  if (!apiKey || !emailFrom) {
    return Response.json(
      { error: "Email service is not configured." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { email: rawEmail, company } = body as { email?: string; company?: string };
  const email = rawEmail?.trim();

  const ip = getClientIp(req);
  const rateLimit = checkRateLimit(`waitlist:${ip}`);
  if (!rateLimit.ok) {
    const retryAfter = Math.max(1, Math.ceil((rateLimit.resetAt - Date.now()) / 1000));
    return Response.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: {
          "Retry-After": retryAfter.toString(),
        },
      }
    );
  }

  const trap = typeof company === "string" ? company.trim() : "";
  if (trap) {
    return Response.json({
      ok: true,
      message: "You're in! We'll email you when early access opens.",
    });
  }
  if (!isValidEmail(email)) {
    return Response.json({ error: "Invalid email address." }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase();
  let created = false;
  try {
    await prisma.waitlistEntry.create({
      data: {
        email: normalizedEmail,
      },
    });
    created = true;
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      created = false;
    } else {
      return Response.json(
        { error: "Failed to save waitlist entry." },
        { status: 500 }
      );
    }
  }

  if (!created) {
    return Response.json({
      ok: true,
      message: "You're already on the waitlist. We'll be in touch soon.",
    });
  }

  const payload = {
    from: emailFrom,
    to: [email],
    subject: "You're on the FrameSense waitlist",
    html: buildEmailHtml(email),
    text: `You're on the FrameSense waitlist. We'll reach out when early access opens. Signed up with: ${email}`,
  };

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const details = await response.text();
    return Response.json(
      { error: "Failed to send waitlist email.", details },
      { status: 502 }
    );
  }

  return Response.json({
    ok: true,
    message: "You're in! We'll email you when early access opens.",
  });
}
