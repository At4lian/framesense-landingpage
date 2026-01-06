import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";

const title = "How Automated Video QC Works";
const description =
  "Learn how FrameSense runs automated video QC in three steps: upload, scan, and report.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/how-it-works",
});

const steps = [
  {
    step: "1",
    title: "Upload your final export",
    body: "Drop in the deliverable and pick a preset that matches your client or platform spec.",
  },
  {
    step: "2",
    title: "FrameSense runs automated QC",
    body: "We scan frames and audio for black frames, freezes, silence, loudness spikes, and spec mismatches.",
  },
  {
    step: "3",
    title: "Review a clear PASS/FAIL report",
    body: "Get timecodes and severity so you can fix issues fast and deliver with confidence.",
  },
];

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="FrameSense turns QC into a repeatable three-step workflow built for editors and post-production teams."
      eyebrow="How it works"
      ctas={[
        { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
        { label: "See features", href: "/features", variant: "secondary" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Three steps to confident delivery</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-xs font-semibold text-indigo-300">Step {step.step}</p>
              <h3 className="mt-2 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Need presets?</h2>
        <p className="text-base text-zinc-300">
          Use QC presets to standardize delivery specs across every editor and client.
        </p>
        <a
          href="/docs/qc-presets"
          className="inline-flex text-sm text-indigo-300 hover:text-indigo-200 hover:underline underline-offset-4"
        >
          Browse QC presets
        </a>
      </section>
    </MarketingLayout>
  );
}
