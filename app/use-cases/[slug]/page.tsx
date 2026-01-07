import type { Metadata } from "next";
import UseCasePage, { useCaseMetadata } from "@/components/seo/use-case-page";
import { useCasePages } from "@/lib/seo-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(useCasePages).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  return useCaseMetadata(params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  return <UseCasePage slug={params.slug} />;
}
