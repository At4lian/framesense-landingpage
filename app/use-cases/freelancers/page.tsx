import UseCasePage, { useCaseMetadata } from "@/components/seo/use-case-page";

export const metadata = useCaseMetadata("freelancers");

export default function Page() {
  return <UseCasePage slug="freelancers" />;
}
