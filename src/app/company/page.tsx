import PageHeader from "@/theme/components/common/PageHeader";
import CompanySections from "@/theme/components/company/CompanySections";
import { site } from "@/theme/config/site";
import { pageMetadata } from "@/theme/lib/seo";

export const metadata = pageMetadata(site.seo.pages.company, "/company");

export default function CompanyPage() {
  return (
    <>
      <PageHeader
        title="Chi siamo"
        description={site.pages.company.intro}
        path="/company"
      />
      <CompanySections />
    </>
  );
}
