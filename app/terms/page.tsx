import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";

const title = "Terms of Use";
const description =
  "Terms for using the FrameSense website and joining the early access waitlist.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/terms",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="These terms describe how you can use the FrameSense site and waitlist."
      eyebrow="Terms"
      ctas={[
        { label: "Contact the team", href: "/contact", variant: "primary" },
        { label: "Explore features", href: "/features", variant: "secondary" },
      ]}
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Use of the site</h2>
        <p className="text-base text-zinc-300">
          You agree to use the site for lawful purposes and not to misuse or disrupt the
          service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Waitlist access</h2>
        <p className="text-base text-zinc-300">
          Joining the waitlist does not guarantee access. We may prioritize access based on
          fit and capacity.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Content and updates</h2>
        <p className="text-base text-zinc-300">
          Site content may change as FrameSense evolves. We may update these terms as the
          product develops.
        </p>
      </section>
    </MarketingLayout>
  );
}
