import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";
import { problemPages } from "@/lib/seo-pages";

const title = "AI Video Quality Control Features";
const description =
  "AI video quality control features including black frame detection, freeze detection, silence detection, loudness checks, spec validation, and advanced delivery controls.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/features",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="FrameSense focuses on export-breaking issues with AI-powered checks, clear reports, and preset-based validation that reduce re-exports."
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

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Advanced AI controls</h2>
        <p className="text-base text-zinc-300">
          Add deeper control quality for high-stakes deliveries and fewer re-exports.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Video control quality</h3>
            <ul className="space-y-1 text-sm text-zinc-200">
              <li>Legal range and gamut control (broadcast-safe luma/chroma)</li>
              <li>Interlacing/combing detection</li>
              <li>Letterbox/pillarbox detection</li>
              <li>Blur/out-of-focus and blockiness checks</li>
              <li>Dead/stuck pixel and PSE flash safety tests</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Audio control quality</h3>
            <ul className="space-y-1 text-sm text-zinc-200">
              <li>Loudness detail: momentary, short-term, integrated, LRA, true peak</li>
              <li>Phase correlation and mono compatibility</li>
              <li>Pops/clicks, DC offset, and noise floor flags</li>
              <li>Channel layout validation (L/R/C/LFE/dual mono)</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">File integrity controls</h3>
            <ul className="space-y-1 text-sm text-zinc-200">
              <li>GOP/codec compliance (keyframe interval, profile, level)</li>
              <li>VFR/CFR control with timestamp discontinuities</li>
              <li>Dropped frame detection and A/V sync drift checks</li>
              <li>HDR10/Dolby Vision metadata validation</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Pro/Agency AI upgrades</h3>
            <ul className="space-y-1 text-sm text-zinc-200">
              <li>Version comparison diff with SSIM/PSNR/VMAF</li>
              <li>NLE marker export for Premiere/Resolve</li>
              <li>Custom QC presets with pass/fail rules</li>
              <li>Frame grabs per issue and AI on-screen text grammar checks</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-zinc-400">Pro/Agency controls are available in early access.</p>
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
