import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";
import { problemPages } from "@/lib/seo-pages";

const title = "Automated Video QC Features";
const description =
  "Automated video QC features including black frame detection, freeze detection, silence detection, loudness checks, and spec validation.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/features",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="FrameSense focuses on export-breaking issues with automated checks, clear reports, and preset-based validation."
      eyebrow="Features"
      ctas={[
        { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
        { label: "See pricing", href: "/pricing", variant: "secondary" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Core automated checks</h2>
        <p className="text-base text-zinc-300">
          Each check is designed around a single export risk so your team can spot issues fast.
        </p>
        <ul className="space-y-2 text-sm text-zinc-200">
          {Object.entries(problemPages).map(([slug, page]) => (
            <li key={slug}>
              <a
                href={`/${slug}`}
                className="text-zinc-200 hover:text-white hover:underline underline-offset-4"
              >
                {page.title}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Reports your team can share</h2>
        <p className="text-base text-zinc-300">
          FrameSense produces a clean PASS/FAIL summary with timecodes so editors, producers,
          and clients can sign off quickly.
        </p>
        <ul className="space-y-2 text-sm text-zinc-200">
          <li>Clear PASS/FAIL outcome for each export</li>
          <li>Timecoded issues for fast fixes</li>
          <li>Consistent report format across teams</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Presets for delivery specs</h2>
        <p className="text-base text-zinc-300">
          Use presets to validate resolution, frame rate, and loudness targets for every client.
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
