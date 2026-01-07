import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";

const title = "Careers at FrameSense";
const description =
  "Join FrameSense and help build automated video QC for editors and post-production teams.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/careers",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="We are building automated video QC that keeps teams shipping clean exports. If you want to help, we would love to hear from you."
      eyebrow="Careers"
      ctas={[
        { label: "Contact the team", href: "/contact", variant: "primary" },
        { label: "Explore the product", href: "/features", variant: "secondary" },
      ]}
    >
      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Open roles</h2>
        <p className="text-base text-zinc-300">
          We do not have public roles listed yet, but we are always looking for strong
          builders in product, engineering, and go-to-market.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">What we value</h2>
        <ul className="space-y-2 text-sm text-zinc-200">
          <li>Clear communication and thoughtful product decisions</li>
          <li>Craft, quality, and a bias toward shipping</li>
          <li>Empathy for editors and creative teams</li>
        </ul>
      </section>
    </MarketingLayout>
  );
}
