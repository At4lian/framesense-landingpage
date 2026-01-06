import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingLayout from "@/components/seo/marketing-layout";
import SeoSections from "@/components/seo/seo-sections";
import { buildMetadata } from "@/lib/seo";
import { problemPages } from "@/lib/seo-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(problemPages).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = problemPages[params.slug as keyof typeof problemPages];
  if (!page) {
    return {};
  }
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${params.slug}`,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = problemPages[params.slug as keyof typeof problemPages];
  if (!page) {
    notFound();
  }

  return (
    <MarketingLayout
      title={page.title}
      intro={page.intro}
      eyebrow={page.eyebrow}
      ctas={page.ctas}
      relatedLinks={page.relatedLinks}
    >
      <SeoSections sections={page.sections} />
    </MarketingLayout>
  );
}
