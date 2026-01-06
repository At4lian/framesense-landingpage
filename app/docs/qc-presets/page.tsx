import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";
import { qcPresetPages } from "@/lib/seo-pages";

const title = "QC Presets for Common Video Deliverables";
const description =
  "Browse FrameSense QC presets for TV, social, and YouTube delivery specs.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/docs/qc-presets",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="Choose a QC preset to validate resolution, frame rate, audio targets, and delivery specs before export."
      eyebrow="Docs"
      ctas={[
        { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
        { label: "See all checks", href: "/features", variant: "secondary" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Preset library</h2>
        <p className="text-base text-zinc-300">
          Start with a preset and customize thresholds for your client specs.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(qcPresetPages).map(([slug, page]) => (
            <a
              key={slug}
              href={`/docs/qc-presets/${slug}`}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="text-lg font-semibold text-white">{page.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{page.description}</p>
              <span className="mt-4 inline-flex text-sm text-indigo-300 group-hover:text-indigo-200">
                View preset details
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Want spec validation?</h2>
        <p className="text-base text-zinc-300">
          Pair presets with automated spec checks to flag resolution and frame rate mismatches.
        </p>
        <a
          href="/video-spec-check"
          className="inline-flex text-sm text-indigo-300 hover:text-indigo-200 hover:underline underline-offset-4"
        >
          Learn more about video spec checks
        </a>
      </section>
    </MarketingLayout>
  );
}
