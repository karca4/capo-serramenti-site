import {Blog} from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Le nuove soluzioni per le zanzariere",
    paragraph:
      "Non farti attaccare dalle zanzare quest'estate! Scopri le nostre innovative zanzariere su misura, progettate per garantire protezione ed eleganza alla tua casa.",
    image: "/images/products/zanzariere.jpg",
    tags: ["zanzariere"],
    publishDate: "14/02/2025",
    url: "/blog-details/zanzariere"
  },
  {
    id: 2,
    title: "Risparmio energetico con alluminio a taglio termico o PVC",
    paragraph:
      "Negli ultimi anni il tema dell’efficienza energetica è diventato centrale nella scelta degli infissi grazie alle moderne soluzioni in alluminio a taglio termico e PVC.",
    image: "/images/products/pvc.jpg",
    tags: ["Taglio termico", "PVC"],
    publishDate: "20/02/2025",
    url: "/blog-details/risparmio-energetico"
  }
];
export default blogData;
