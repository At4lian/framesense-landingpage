import type { Metadata } from "next";
import UseCasePage, { useCaseMetadata as getUseCaseMetadata } from "@/components/seo/use-case-page";
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
  return getUseCaseMetadata(params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  return <UseCasePage slug={params.slug} />;
}
