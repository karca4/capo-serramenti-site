import {Metadata} from "next";
import productsData from "@/components/Products/productsData";
import ProductDetails from "@/components/Products/ProductDetails";
import {redirect} from 'next/navigation'

interface Props {
  params: Promise<{ product: string }>;
}

export const metadata: Metadata = {
  title: "Prodotti | Capo Serramenti – Infissi, Serramenti e Soluzioni su Misura",
  description: "Scopri i prodotti di Capo Serramenti: infissi in alluminio, PVC e ferro, zanzariere, porte blindate, tende da sole e soluzioni su misura a Capaccio Paestum.",
};

const ProductDetailsPage = async ({params}: Props) => {
  // defensively handle missing params (so page won't crash if rendered without a param)
  const {product} = await params
  const productData = productsData.find(p => p.id === product)

  if (!productData) {
    redirect("/error")
  }

  return (
    <ProductDetails product={productData}/>
  );
};

export default ProductDetailsPage;

