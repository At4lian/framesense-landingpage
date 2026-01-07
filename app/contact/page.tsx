import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";

const title = "Contact FrameSense";
const description =
  "Get in touch about early access, QC presets, or partnerships with FrameSense.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/contact",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="Reach out for early access, onboarding help, or questions about automated video QC."
      eyebrow="Contact"
      ctas={[
        { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
        { label: "View use cases", href: "/use-cases", variant: "secondary" },
      ]}
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">How to reach us</h2>
        <p className="text-base text-zinc-300">
          Use the waitlist form to tell us about your workflow. We respond to early access
          requests, demos, and preset questions.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">What to include</h2>
        <ul className="space-y-2 text-sm text-zinc-200">
          <li>Your role and team size</li>
          <li>Delivery formats you need to validate</li>
          <li>QC issues you want to catch most often</li>
        </ul>
      </section>
    </MarketingLayout>
  );
}
