import UseCasePage, { useCaseMetadata } from "@/components/seo/use-case-page";

export const metadata = useCaseMetadata("agencies");

export default function Page() {
  return <UseCasePage slug="agencies" />;
}
