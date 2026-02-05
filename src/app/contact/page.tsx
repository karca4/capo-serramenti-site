import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contatti | Capo Serramenti – Sede e Showroom a Capaccio Paestum",
  description: "Contatta Capo Serramenti a Capaccio Paestum: richiedi preventivi gratuiti per serramenti, infissi, zanzariere e strutture su misura. Telefono, email e social sempre disponibili.",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contatti"
        description="Un contatto diretto, una soluzione su misura"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
