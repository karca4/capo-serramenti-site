import RelatedPost from "@/components/Blog/RelatedPost";
import ContactBox from "@/components/Contact/ContactBox";
import Image from "next/image";

import { Metadata } from "next";

interface Props {
  params: { productId: string };
}

export const metadata: Metadata = {
  title: "Product Details | Capo Serramenti",
  description: "Pagina dettagli prodotto",
};

const ProductDetailsPage = ({ params }: Props) => {
  // defensively handle missing params (so page won't crash if rendered without a param)
  const rawProductId = params?.productId ?? "senza-parametro-errore";
  // Strict integer parsing: allow only digits (no signs, no decimals)
  const digitsOnly = /^\d+$/;
  const isPositiveInteger = typeof rawProductId === "string" && digitsOnly.test(rawProductId);
  const productIdNumber = isPositiveInteger ? parseInt(rawProductId as string, 10) : undefined;

  // productIdToShow will be number when valid integer, otherwise original string
  const productIdToShow = productIdNumber ?? rawProductId;

  return (
    <>
      <section className="overflow-hidden pt-[180px] pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-8/12">
              <div>
                <h1 className="mb-8 text-3xl leading-tight font-bold text-black sm:text-4xl sm:leading-tight dark:text-white">
                  Prodotto {productIdToShow}
                </h1>
                <div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat.
                  </p>
                  <div className="mb-10 w-full overflow-hidden rounded-sm">
                    <div className="relative aspect-97/60 w-full sm:aspect-97/44">
                      <Image
                        src="/images/blog/blog-details-01.jpg"
                        alt="image"
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                  <p className="text-body-color mb-8 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis enim lobortis scelerisque fermentum. Neque
                    sodales ut etiam sit amet. Ligula ullamcorper
                    <strong className="text-primary dark:text-white">
                      {" "}
                      malesuada{" "}
                    </strong>
                    proin libero nunc consequat interdum varius. Quam
                    pellentesque nec nam aliquam sem et tortor consequat.
                    Pellentesque adipiscing commodo elit at imperdiet.
                  </p>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Semper auctor neque vitae tempus quam pellentesque nec.
                    <span className="text-primary underline dark:text-white">
                      {" "}
                      Amet dictum sit amet justo{" "}
                    </span>
                    donec enim diam. Varius sit amet mattis vulputate enim nulla
                    aliquet porttitor. Odio pellentesque diam volutpat commodo
                    sed.
                  </p>
                  <h3 className="font-xl mb-10 leading-tight font-bold text-black sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight dark:text-white">
                    Digital marketplace for Ui/Ux designers.
                  </h3>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                  <ul className="text-body-color mb-10 list-inside list-disc">
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Consectetur adipiscing elit in voluptate velit.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Mattis vulputate cupidatat.
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Vulputate enim nulla aliquet porttitor odio pellentesque
                    </li>
                    <li className="text-body-color mb-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
                      Ligula ullamcorper malesuada proin
                    </li>
                  </ul>
                  <div className="bg-primary/10 relative z-10 mb-10 overflow-hidden rounded-md p-8 md:p-9 lg:p-8 xl:p-9">
                    <p className="text-body-color text-center text-base font-medium italic">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod incididunt utionals labore et dolore magna
                      aliqua. Quis lobortis scelerisque fermentum, The Neque ut
                      etiam sit amet.
                    </p>
                  </div>
                  <p className="text-body-color mb-10 text-base leading-relaxed font-medium sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    consectetur adipiscing elit in voluptate velit esse cillum
                    dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    mattis vulputate cupidatat.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <div className="shadow-three dark:bg-gray-dark mb-10 rounded-xs bg-white dark:shadow-none">
                <h3 className="border-body-color/10 border-b px-8 py-4 text-lg font-semibold text-black dark:border-white/10 dark:text-white">
                  Related Posts
                </h3>
                <ul className="p-8">
                  <li className="border-body-color/10 mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedPost
                      title="Best way to boost your online sales."
                      image="/images/blog/post-01.jpg"
                      slug="#"
                      date="12 Feb 2025"
                    />
                  </li>
                  <li className="border-body-color/10 mb-6 border-b pb-6 dark:border-white/10">
                    <RelatedPost
                      title="50 Best web design tips & tricks that will help you."
                      image="/images/blog/post-02.jpg"
                      slug="#"
                      date="15 Feb, 2024"
                    />
                  </li>
                  <li>
                    <RelatedPost
                      title="The 8 best landing page builders, reviewed"
                      image="/images/blog/post-03.jpg"
                      slug="#"
                      date="05 Jun, 2024"
                    />
                  </li>
                </ul>
              </div>
              <ContactBox />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetailsPage;

