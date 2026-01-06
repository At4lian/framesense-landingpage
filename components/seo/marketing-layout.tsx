import type { ReactNode } from "react";
import type { SeoCta, SeoLink } from "@/lib/seo-pages";

type MarketingLayoutProps = {
  title: string;
  intro: string;
  eyebrow?: string;
  ctas?: SeoCta[];
  relatedLinks?: SeoLink[];
  children?: ReactNode;
};

const navLinks: SeoLink[] = [
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Pricing", href: "/pricing" },
  { label: "Use cases", href: "/use-cases" },
  { label: "Docs", href: "/docs" },
];

function ctaClass(variant?: SeoCta["variant"]) {
  const base =
    "inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";
  if (variant === "secondary") {
    return `${base} border border-white/15 bg-white/5 text-white hover:bg-white/10`;
  }
  return `${base} bg-indigo-500 text-white hover:bg-indigo-400`;
}

export default function MarketingLayout({
  title,
  intro,
  eyebrow,
  ctas,
  relatedLinks,
  children,
}: MarketingLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-indigo-500/15 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-[520px] w-[980px] -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] bg-[size:24px_24px] opacity-30" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="text-sm font-semibold tracking-tight text-white"
          >
            FrameSense
          </a>
          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-300 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a href="/#waitlist" className={ctaClass("secondary")}>
            Join waitlist
          </a>
        </div>
      </header>

      <main id="content" className="mx-auto max-w-5xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {intro}
        </p>
        {ctas ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {ctas.map((cta) => (
              <a key={cta.href + cta.label} href={cta.href} className={ctaClass(cta.variant)}>
                {cta.label}
              </a>
            ))}
          </div>
        ) : null}

        <div className="mt-12 space-y-10">{children}</div>

        {relatedLinks ? (
          <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-lg font-semibold text-white">Related pages</h2>
            <ul className="mt-4 grid gap-2 text-sm text-zinc-200 sm:grid-cols-2">
              {relatedLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-200 hover:text-white hover:underline underline-offset-4"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>

      <footer className="border-t border-white/10 bg-zinc-950/70">
        <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-zinc-400 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>FrameSense automated video QC for editors and post-production teams.</p>
            <div className="flex flex-wrap gap-4">
              <a href="/features" className="hover:text-white">
                Features
              </a>
              <a href="/use-cases" className="hover:text-white">
                Use cases
              </a>
              <a href="/docs" className="hover:text-white">
                Docs
              </a>
              <a href="/#waitlist" className="hover:text-white">
                Join waitlist
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
