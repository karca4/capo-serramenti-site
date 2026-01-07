import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Company from "@/components/Company";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const CompanyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Chi siamo"
        description="Artigiani per passione, professionisti per scelta"
      />

      <Company />
    </>
  );
};

export default CompanyPage;
