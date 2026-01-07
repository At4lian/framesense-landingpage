import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingLayout from "@/components/seo/marketing-layout";
import SeoSections from "@/components/seo/seo-sections";
import { buildMetadata } from "@/lib/seo";
import { useCasePages } from "@/lib/seo-pages";

export function getUseCasePage(slug: string) {
  return useCasePages[slug as keyof typeof useCasePages];
}

export function useCaseMetadata(slug: string): Metadata {
  const page = getUseCasePage(slug);
  if (!page) {
    return {};
  }
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/use-cases/${slug}`,
  });
}

export default function UseCasePage({ slug }: { slug: string }) {
  const page = getUseCasePage(slug);
  if (!page) {
    notFound();
  }

  return (
    <MarketingLayout
      title={page.title}
      intro={page.intro}
      eyebrow={page.eyebrow}
      ctas={page.ctas}
    >
      <SeoSections sections={page.sections} />
    </MarketingLayout>
  );
}
