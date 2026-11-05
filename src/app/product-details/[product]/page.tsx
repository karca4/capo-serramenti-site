import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetails from "@/theme/components/products/ProductDetails";
import { site } from "@/theme/config/site";
import { productPath } from "@/theme/lib/routes";
import { breadcrumbJsonLd, jsonLdScript, serviceJsonLd } from "@/theme/lib/seo";

interface Props {
  params: Promise<{ product: string }>;
}

// Solo i prodotti configurati: qualunque altro slug risponde 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return site.products.map((p) => ({ product: p.id }));
}

function findProduct(id: string) {
  return site.products.find((p) => p.id === id);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { product } = await params;
  const data = findProduct(product);
  if (!data) return {};
  const title = data.seo?.title ?? data.title;
  const description = data.seo?.description ?? data.summary;
  return {
    title,
    description,
    alternates: { canonical: productPath(data) },
    openGraph: {
      title,
      description,
      url: productPath(data),
      ...(data.image ? { images: [data.image] } : {}),
    },
  };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { product } = await params;
  const data = findProduct(product);
  if (!data) notFound();

  const path = productPath(data);
  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Prodotti", path: "/#prodotti" },
      { name: data.title, path },
    ]),
    serviceJsonLd({
      name: data.title,
      description: data.seo?.description ?? data.summary,
      path,
      image: data.image,
    }),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <ProductDetails product={data} />
    </>
  );
}
