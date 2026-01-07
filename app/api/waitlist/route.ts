import { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827;">
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

  const email = (body as { email?: string }).email?.trim();
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
