import MarketingLayout from "@/components/seo/marketing-layout";
import { buildMetadata } from "@/lib/seo";
import { problemPages, useCasePages } from "@/lib/seo-pages";

const title = "Video QC Use Cases for Editors";
const description =
  "Explore video QC use cases for freelancers, post-production teams, agencies, production companies, social content, and TV delivery.";

export const metadata = buildMetadata({
  title,
  description,
  path: "/use-cases",
});

export default function Page() {
  return (
    <MarketingLayout
      title={title}
      intro="Pick the workflow that matches your team. FrameSense provides AI video QC for editors, freelancers, agencies, and post-production teams."
      eyebrow="Use cases"
      ctas={[
        { label: "Join the waitlist", href: "/#waitlist", variant: "primary" },
        { label: "Explore features", href: "/features", variant: "secondary" },
      ]}
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-white">Choose your workflow</h2>
        <p className="text-base text-zinc-300">
          Each use case highlights the checks and presets that matter most for that delivery
          environment.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {Object.entries(useCasePages).map(([slug, page]) => (
            <a
              key={slug}
              href={`/use-cases/${slug}`}
              className="group block rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]"
            >
              <h3 className="text-lg font-semibold text-white">{page.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{page.description}</p>
              <div className="mt-4 text-sm text-indigo-300 group-hover:text-indigo-200">
                View use case
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">Common QC checks</h2>
        <p className="text-base text-zinc-300">
          FrameSense focuses on export failures that cause re-exports and client delays.
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
    </MarketingLayout>
  );
}
