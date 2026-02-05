import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Company from "@/components/Company";

export const metadata: Metadata = {
  title: "Chi Siamo | Capo Serramenti – Serramenti su Misura a Capaccio Paestum",
  description: "Capo Serramenti nasce da oltre 30 anni di esperienza nella lavorazione di alluminio e ferro. Serramenti su misura, qualità artigianale e soluzioni affidabili a Capaccio Paestum.",

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
