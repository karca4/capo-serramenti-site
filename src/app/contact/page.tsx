import PageHeader from "@/theme/components/common/PageHeader";
import ContactSection from "@/theme/components/contact/ContactSection";
import { site } from "@/theme/config/site";
import { pageMetadata } from "@/theme/lib/seo";

export const metadata = pageMetadata(site.seo.pages.contact, "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contatti"
        description={site.pages.contact.intro}
        path="/contact"
      />
      <ContactSection />
    </>
  );
}
