import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";

const title = "About FrameSense";
const description =
  "FrameSense builds automated video QC for editors, freelancers, and post-production teams.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/about",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="FrameSense helps editors ship clean exports faster with automated video QC and clear PASS/FAIL reports."
      eyebrow="About"
      ctas={[
        { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
        { label: "Contact the team", href: "/contact", variant: "secondary" },
      ]}
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Our mission</h2>
        <p className="text-base text-zinc-300">
          Reduce re-exports and late night fixes by catching video QC issues before a file
          ships.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Who we serve</h2>
        <p className="text-base text-zinc-300">
          Editors, freelancers, post-production teams, and small studios who need reliable
          delivery checks without broadcast heavy tooling.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">What we deliver</h2>
        <ul className="space-y-2 text-sm text-zinc-200">
          <li>Automated checks for black frames, freezes, silence, and loudness spikes</li>
          <li>Spec validation against presets and client delivery targets</li>
          <li>Clear PASS/FAIL reports with timecodes you can share</li>
        </ul>
      </section>
    </MarketingLayout>
  );
}
