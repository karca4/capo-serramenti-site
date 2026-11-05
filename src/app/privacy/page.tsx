import PageHeader from "@/theme/components/common/PageHeader";
import PrivacyContent from "@/theme/components/legal/PrivacyContent";
import { site } from "@/theme/config/site";
import { pageMetadata } from "@/theme/lib/seo";

export const metadata = pageMetadata(site.seo.pages.privacy, "/privacy");

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        title="Privacy e cookie policy"
        description={site.pages.privacy.intro}
        path="/privacy"
      />
      <PrivacyContent />
    </>
  );
}
