import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MarketingLayout from "@/components/seo/marketing-layout";
import SeoSections from "@/components/seo/seo-sections";
import { buildMetadata } from "@/lib/seo";
import { qcPresetPages } from "@/lib/seo-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(qcPresetPages).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = qcPresetPages[params.slug];
  if (!page) {
    return {};
  }
  return buildMetadata({
    title: page.title,
    description: page.description,
    path: `/docs/qc-presets/${params.slug}`,
  });
}

export default function Page({ params }: { params: { slug: string } }) {
  const page = qcPresetPages[params.slug];
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
