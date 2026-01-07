import type { Metadata } from "next";
import ProblemPage, { problemMetadata } from "@/components/seo/problem-page";
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
  return problemMetadata(params.slug);
}

export default function Page({ params }: { params: { slug: string } }) {
  return <ProblemPage slug={params.slug} />;
}
