import {Metadata} from "next";
import productsData from "@/components/Products/productsData";
import ProductDetails from "@/components/Products/ProductDetails";
import {redirect, RedirectType} from 'next/navigation'

interface Props {
  params: Promise<{ product: string }>;
}

export const metadata: Metadata = {
  title: "Product Details | Capo Serramenti",
  description: "Pagina dettagli prodotto",
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

