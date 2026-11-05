import CtaBand from "@/theme/components/common/CtaBand";
import BlogSection from "@/theme/components/home/BlogSection";
import FeaturesSection from "@/theme/components/home/FeaturesSection";
import GalleryTeaser from "@/theme/components/home/GalleryTeaser";
import Hero from "@/theme/components/home/Hero";
import PartnersSection from "@/theme/components/home/PartnersSection";
import ProcessSection from "@/theme/components/home/ProcessSection";
import ProductsSection from "@/theme/components/home/ProductsSection";
import { site } from "@/theme/config/site";
import { pageMetadata } from "@/theme/lib/seo";

export const metadata = pageMetadata(site.seo.pages.home, "/", {
  absolute: true,
});

// Le sezioni facoltative (punti di forza, processo, anteprima galleria,
// news, partner) non vengono mostrate se il sito non le configura.
export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <ProductsSection />
      <ProcessSection />
      <GalleryTeaser />
      <BlogSection />
      <PartnersSection />
      <CtaBand />
    </>
  );
}
