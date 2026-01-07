import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const GalleryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      <Gallery />
    </>
  );
};

export default GalleryPage;
