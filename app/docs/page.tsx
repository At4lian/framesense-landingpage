import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";

const title = "Video QC Docs and Resources";
const description =
  "Documentation and FAQs for FrameSense automated video QC, including QC presets and delivery specs.";

const docsFaqItems = [
  {
    question: "What is a QC preset?",
    answer:
      "A QC preset defines target specs and thresholds so every export is validated the same way.",
  },
  {
    question: "Can I customize presets for a client?",
    answer:
      "Yes. Start with a preset and adjust specs to match the client delivery sheet.",
  },
  {
    question: "Where should I start?",
    answer:
      "Begin with the preset library and the core QC checks for black frames, freezes, and loudness.",
  },
] as const;

const docsFaqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: docsFaqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata = buildMetadata({
  title,
  description,
  path: "/docs",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="Find onboarding guidance, QC presets, and delivery spec references so your team can ship faster."
      eyebrow="Docs"
      ctas={[
        { label: "Explore QC presets", href: "/docs/qc-presets", variant: "primary" },
        { label: "See how it works", href: "/how-it-works", variant: "secondary" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Start here</h2>
        <p className="text-base text-zinc-300">
          FrameSense documents focus on the questions editors and producers ask before
          delivery.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="/docs/qc-presets"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <h3 className="text-lg font-semibold text-white">QC presets</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Preset specs for TV, social, and YouTube delivery targets.
            </p>
            <span className="mt-4 inline-flex text-sm text-indigo-300 group-hover:text-indigo-200">
              Browse presets
            </span>
          </a>
          <a
            href="/features"
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
          >
            <h3 className="text-lg font-semibold text-white">QC checks</h3>
            <p className="mt-2 text-sm text-zinc-300">
              Learn which export issues FrameSense detects and reports.
            </p>
            <span className="mt-4 inline-flex text-sm text-indigo-300 group-hover:text-indigo-200">
              Explore checks
            </span>
          </a>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Need help fast?</h2>
        <p className="text-base text-zinc-300">
          Reach out for onboarding guidance or ask about custom presets for your delivery
          workflow.
        </p>
        <a
          href="/#waitlist"
          className="inline-flex text-sm text-indigo-300 hover:text-indigo-200 hover:underline underline-offset-4"
        >
          Join the waitlist to get early access support
        </a>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Docs FAQ</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {docsFaqItems.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-base font-semibold text-white">{item.question}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.answer}</p>
            </div>
          ))}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(docsFaqStructuredData),
          }}
        />
      </section>
    </MarketingLayout>
  );
}
