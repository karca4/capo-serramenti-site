import Blog from "@/components/Blog";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Products from "@/components/Products";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capo Serramenti | Infissi, Serramenti e Zanzariere su Misura a Capaccio Paestum",
  description: "Capo Serramenti realizza infissi, serramenti, zanzariere, porte blindate e strutture su misura in alluminio, PVC e ferro a Capaccio Paestum (Salerno). Qualità artigianale dal 1993.",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Products />
      <Blog />
    </>
  );
}
