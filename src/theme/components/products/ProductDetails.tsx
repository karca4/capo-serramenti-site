import Image from "next/image";
import Link from "next/link";
import {
  LuCheck,
  LuChevronDown,
  LuChevronRight,
  LuImages,
  LuMapPin,
  LuPhone,
} from "react-icons/lu";
import { site } from "../../config/site";
import type { Product } from "../../config/types";
import { galleryPath } from "../../lib/routes";
import { ButtonLink } from "../common/Button";
import SectionTitle from "../common/SectionTitle";
import SocialIcon, { whatsappUrl } from "../common/SocialIcon";
import ContactCard from "../contact/ContactCard";
import ProductCard from "./ProductCard";

const ProductDetails = ({ product }: { product: Product }) => {
  const phone = site.contacts.phones[0];
  const whatsapp = site.contacts.phones.find((p) => p.whatsapp);
  const others = site.products.filter((p) => p.id !== product.id);

  return (
    <>
      <section className="pt-20 pb-14 md:pt-28 md:pb-20">
        <div className="container grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            {product.image && (
              // Su smartphone l'immagine va a tutta larghezza, da bordo a bordo.
              <div className="relative -mx-4 mb-6 aspect-4/3 overflow-hidden sm:mx-0 sm:rounded-2xl lg:mb-0 lg:aspect-[5/4]">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  priority
                  sizes="(min-width: 992px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>

          <div className="lg:col-span-5 lg:pt-4">
            <nav aria-label="Percorso" className="mb-3">
              <ol className="text-body-color dark:text-body-color-dark flex flex-wrap items-center gap-1.5 text-sm">
                <li>
                  <Link
                    href="/"
                    className="hover:text-primary dark:hover:text-white"
                  >
                    Home
                  </Link>
                </li>
                <li aria-hidden>
                  <LuChevronRight />
                </li>
                <li>
                  <Link
                    href="/#prodotti"
                    className="hover:text-primary dark:hover:text-white"
                  >
                    Prodotti
                  </Link>
                </li>
                <li aria-hidden>
                  <LuChevronRight />
                </li>
                <li
                  aria-current="page"
                  className="text-primary font-medium dark:text-white"
                >
                  {product.title}
                </li>
              </ol>
            </nav>
            <h1 className="mb-4 text-3xl leading-tight font-bold text-black md:text-4xl dark:text-white">
              {product.title}
            </h1>
            <p className="text-body-color dark:text-body-color-dark mb-8 text-base leading-relaxed md:text-lg">
              {product.summary}
            </p>

            <div className="flex flex-col gap-3">
              <ButtonLink href={site.cta.quote.href} variant="accent" full>
                {site.cta.quote.label}
              </ButtonLink>
              <div className="grid grid-cols-2 gap-3">
                {phone && (
                  <ButtonLink
                    href={`tel:${phone.number}`}
                    variant="outline"
                    full
                  >
                    <LuPhone aria-hidden /> Chiama
                  </ButtonLink>
                )}
                {whatsapp && (
                  <ButtonLink
                    href={whatsappUrl(whatsapp.number)}
                    variant="outline"
                    full
                    external
                  >
                    <SocialIcon network="whatsapp" /> WhatsApp
                  </ButtonLink>
                )}
              </div>
              <ButtonLink href={galleryPath(product)} variant="primary" full>
                <LuImages aria-hidden /> Guarda i nostri lavori
              </ButtonLink>
            </div>

            <p className="text-body-color dark:text-body-color-dark mt-5 flex gap-2 text-sm leading-relaxed">
              <LuMapPin aria-hidden className="mt-0.5 shrink-0" />
              <span>
                {site.serviceArea} Ogni intervento è valutato su misura, con un
                preventivo gratuito e senza impegno.
              </span>
            </p>

            <div className="mt-8 hidden lg:block">
              <ContactCard compact />
            </div>
          </div>
        </div>
      </section>

      {product.description?.length || product.benefits?.length ? (
        <section className="pb-14 md:pb-20">
          <div className="container grid gap-10 lg:grid-cols-12 lg:gap-12">
            {product.description?.length ? (
              <div className="lg:col-span-7">
                <h2 className="mb-5 text-2xl font-bold text-black md:text-3xl dark:text-white">
                  {product.title}: caratteristiche e vantaggi
                </h2>
                <div className="text-body-color dark:text-body-color-dark space-y-4 text-base leading-relaxed md:text-lg">
                  {product.description.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
                {product.applications?.items.length ? (
                  <>
                    <h3 className="mt-8 mb-4 text-xl font-bold text-black dark:text-white">
                      {product.applications.title}
                    </h3>
                    <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                      {product.applications.items.map((item) => (
                        <li
                          key={item}
                          className="text-body-color dark:text-body-color-dark flex items-start gap-3 text-base"
                        >
                          <LuChevronRight
                            aria-hidden
                            className="text-accent mt-1 shrink-0"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : null}
              </div>
            ) : null}
            {product.benefits?.length ? (
              <div className="lg:col-span-5">
                <div className="bg-gray-light dark:bg-gray-dark rounded-2xl p-6 sm:p-8">
                  <h2 className="mb-5 text-xl font-bold text-black dark:text-white">
                    Perché sceglierli
                  </h2>
                  <ul className="space-y-3">
                    {product.benefits.map((text) => (
                      <li
                        key={text}
                        className="flex items-start gap-3 text-base font-medium text-black dark:text-white"
                      >
                        <span className="bg-accent mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm text-black">
                          <LuCheck aria-hidden />
                        </span>
                        {text}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {product.faq?.length ? (
        <section className="pb-14 md:pb-20">
          <div className="container">
            <div className="max-w-[900px]">
              <SectionTitle
                eyebrow="Domande frequenti"
                title="Hai dei dubbi?"
              />
              <div className="divide-y divide-black/5 rounded-2xl border border-black/5 dark:divide-white/10 dark:border-white/10">
                {product.faq.map((item) => (
                  <details key={item.question} className="group">
                    <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base font-semibold text-black sm:px-6 dark:text-white [&::-webkit-details-marker]:hidden">
                      {item.question}
                      <LuChevronDown
                        aria-hidden
                        className="shrink-0 transition-transform group-open:rotate-180"
                      />
                    </summary>
                    <p className="text-body-color dark:text-body-color-dark px-5 pb-5 text-base leading-relaxed sm:px-6">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {others.length > 0 && (
        <section className="bg-gray-light dark:bg-gray-dark py-14 md:py-20">
          <div className="container">
            <SectionTitle eyebrow="Scopri anche" title="Altri prodotti" />
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
              {others.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
