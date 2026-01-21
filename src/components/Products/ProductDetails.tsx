"use client";

import Image from "next/image";
import ContactBox from "@/components/Contact/ContactBox";
import {Feature} from "@/types/feature";
import RelatedProduct from "@/components/Products/RelatedProduct";
import { MdOutlinePhoto} from "react-icons/md";
import Link from "next/link";
import {GrGallery} from "react-icons/gr";

const ProductDetails = ({product}: { product: Feature }) => {
  return (
    <>
      <section className="overflow-hidden pt-[180px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1
                  className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  {product.title}
                </h1>
                <div>
                  <p
                    className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    {product.paragraph}
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src={product.image || "/images/products/not_found.jpg"}
                        alt="image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  {product.component ?? null}
                  {product.gallery &&
                    <Link
                    href={product.gallery}
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-lg text-white duration-300 ease-in-out hover:bg-primary/80"
                    >
                    <GrGallery className="mr-2 inline-block text-lg"/>
                    Vai alla galleria per questo prodotto
                    </Link>
                  }
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div
                className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
                <h3
                  className="mb-4 text-3xl leading-tight text-black dark:text-white">
                  Prodotti correlati
                </h3>
                <ul className="p-8">
                  {
                    product.relatedFeatures?.map((feature: Feature, idx: number) => (
                      <li
                        key={feature.id ?? idx}
                        className="border-body-color/10 mb-6 border-b pb-6 dark:border-white/10"
                      >
                        <RelatedProduct
                          title={feature.title ?? "Best way to boost your online sales."}
                          image={feature.image ?? "/images/blog/post-01.jpg"}
                          link={`/product-details/${feature.id}`}
                          paragraph={feature.paragraph ?? ""}
                        />
                      </li>
                    ))
                  }
                </ul>
              </div>
              <ContactBox/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};

export default ProductDetails;
