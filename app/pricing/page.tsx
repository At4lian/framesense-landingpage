import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";

const title = "Automated Video QC Pricing";
const description =
  "Pricing for FrameSense automated video QC. Plans for freelancers, teams, and studios.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/pricing",
});

const plans = [
  {
    name: "Starter",
    price: "$29",
    blurb: "For freelancers and small creators.",
    features: [
      "Core QC checks",
      "Single concurrent job",
      "Shareable report",
      "Email notifications",
    ],
  },
  {
    name: "Pro",
    price: "$79",
    blurb: "For teams shipping weekly.",
    features: [
      "Advanced checks and thresholds",
      "Up to 4 concurrent jobs",
      "Preset management",
      "Priority queue",
    ],
  },
  {
    name: "Studio",
    price: "Custom",
    blurb: "For high-volume production.",
    features: [
      "Custom presets per client",
      "Higher concurrency",
      "API and webhook access",
      "Dedicated support",
    ],
  },
];

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="Simple plans that scale with your output. Early access includes an extended trial and onboarding help."
      eyebrow="Pricing"
      ctas={[
        { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
        { label: "See features", href: "/features", variant: "secondary" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Choose a plan</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
              <p className="mt-1 text-3xl font-semibold text-white">{plan.price}</p>
              <p className="mt-2 text-sm text-zinc-300">{plan.blurb}</p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-200">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Need custom pricing?</h2>
        <p className="text-base text-zinc-300">
          We can tailor presets, concurrency, and onboarding for studios with higher volume.
        </p>
        <a
          href="/#waitlist"
          className="inline-flex text-sm text-indigo-300 hover:text-indigo-200 hover:underline underline-offset-4"
        >
          Talk to the team about Studio plans
        </a>
      </section>
    </MarketingLayout>
  );
}
