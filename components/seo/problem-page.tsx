import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingLayout from "@/components/seo/marketing-layout";
import SeoSections from "@/components/seo/seo-sections";
import { buildMetadata } from "@/lib/seo";
import { problemPages } from "@/lib/seo-pages";

export function getProblemPage(slug: string) {
  return problemPages[slug as keyof typeof problemPages];
}

export function problemMetadata(slug: string): Metadata {
  const page = getProblemPage(slug);
  if (!page) {
    return {};
  }
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/${slug}`,
  });
}

export default function ProblemPage({ slug }: { slug: string }) {
  const page = getProblemPage(slug);
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
