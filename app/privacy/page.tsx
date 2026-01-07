import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";

const title = "Privacy Policy";
const description =
  "Learn how FrameSense handles information submitted through the website and waitlist.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/privacy",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="This page explains how we handle information you share with FrameSense."
      eyebrow="Privacy"
      ctas={[
        { label: "Contact the team", href: "/contact", variant: "primary" },
        { label: "Join the waitlist", href: "/#waitlist", variant: "secondary" },
      ]}
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Information we collect</h2>
        <p className="text-base text-zinc-300">
          We collect information you submit through the waitlist or contact flows, such as
          your email address and any details you share about your workflow.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">How we use information</h2>
        <p className="text-base text-zinc-300">
          We use your information to provide early access updates, respond to questions, and
          improve FrameSense.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Questions</h2>
        <p className="text-base text-zinc-300">
          If you have privacy questions, reach out through the contact page.
        </p>
      </section>
    </MarketingLayout>
  );
}
