import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Galleria Lavori | Capo Serramenti – Serramenti e Realizzazioni su Misura",
  description: "Scopri la galleria dei lavori Capo Serramenti: infissi, serramenti, strutture in alluminio e ferro realizzate su misura a Capaccio Paestum e provincia di Salerno.",
  // other metadata
};

const GalleryPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Galleria"
        description="Il nostro lavoro, sotto i tuoi occhi"
      />

      <Gallery />
    </>
  );
};

export default GalleryPage;
