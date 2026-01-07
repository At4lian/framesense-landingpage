import UseCasePage, { useCaseMetadata } from "@/components/seo/use-case-page";

export const metadata = useCaseMetadata("post-production");

export default function Page() {
  return <UseCasePage slug="post-production" />;
}
