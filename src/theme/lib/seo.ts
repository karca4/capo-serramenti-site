import type { Metadata } from "next";
import type { BlogPost, PageSeo } from "../config/types";
import { site } from "../config/site";
import { siteUrl } from "./site-url";

/** Metadata di base, usati dal root layout. */
export function rootMetadata(): Metadata {
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: site.seo.defaultTitle,
      template: site.seo.titleTemplate,
    },
    description: site.seo.description,
    applicationName: site.name,
    icons: { icon: site.icons.favicon, apple: site.icons.apple },
    openGraph: {
      type: "website",
      locale: site.locale,
      siteName: site.name,
    },
  };
}

/**
 * Metadata di una pagina, con URL canonico.
 * `absolute` ignora il template del titolo (usato dalla home).
 */
export function pageMetadata(
  seo: PageSeo,
  path: string,
  { absolute = false, noindex = false } = {},
): Metadata {
  return {
    title: absolute ? { absolute: seo.title } : seo.title,
    description: seo.description,
    alternates: { canonical: path },
    openGraph: { title: seo.title, description: seo.description, url: path },
    ...(noindex ? { robots: { index: false } } : {}),
  };
}

/** Dati strutturati schema.org dell'attività (LocalBusiness). */
export function localBusinessJsonLd() {
  const { address } = site.contacts;
  const primaryPhone = site.contacts.phones[0];
  const primaryEmail = site.contacts.emails[0];

  return {
    "@context": "https://schema.org",
    "@type": site.businessType,
    name: site.name,
    legalName: site.legalName,
    vatID: site.vatNumber,
    url: siteUrl,
    logo: new URL(site.logo.full.src, siteUrl).toString(),
    image: new URL(
      site.home.hero.image?.desktop ?? site.logo.full.src,
      siteUrl,
    ).toString(),
    description: site.seo.description,
    foundingDate: String(site.foundedYear),
    telephone: primaryPhone?.number,
    email: primaryEmail?.address,
    address: {
      "@type": "PostalAddress",
      streetAddress: address.street,
      postalCode: address.postalCode,
      addressLocality: address.city,
      addressRegion: address.province,
      addressCountry: address.country,
    },
    ...(address.geo
      ? {
          geo: {
            "@type": "GeoCoordinates",
            latitude: address.geo.lat,
            longitude: address.geo.lng,
          },
        }
      : {}),
    areaServed: site.areaServed,
    ...(site.openingHours?.length
      ? {
          openingHoursSpecification: site.openingHours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
        }
      : {}),
    sameAs: site.social.map((s) => s.url),
  };
}

/** Riferimento compatto all'attività, da usare dentro altri JSON-LD. */
function businessRef() {
  return { "@type": site.businessType, name: site.name, url: siteUrl };
}

/** Percorso di navigazione (BreadcrumbList); la home è aggiunta in testa. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  const all = [{ name: "Home", path: "/" }, ...items];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

/** Servizio offerto (una pagina prodotto), collegato all'attività. */
export function serviceJsonLd(service: {
  name: string;
  description: string;
  path: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.description,
    url: new URL(service.path, siteUrl).toString(),
    ...(service.image
      ? { image: new URL(service.image, siteUrl).toString() }
      : {}),
    provider: businessRef(),
    areaServed: site.areaServed,
  };
}

/** Articolo del blog (BlogPosting), pubblicato dall'attività. */
export function blogPostingJsonLd(post: BlogPost, path: string) {
  const url = new URL(path, siteUrl).toString();
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seo?.description ?? post.excerpt,
    image: new URL(post.image, siteUrl).toString(),
    datePublished: post.publishDate,
    dateModified: post.updatedDate ?? post.publishDate,
    url,
    mainEntityOfPage: url,
    inLanguage: site.language,
    keywords: post.tags.join(", "),
    author: post.author
      ? { "@type": "Person", name: post.author.name }
      : businessRef(),
    publisher: {
      ...businessRef(),
      logo: new URL(site.logo.full.src, siteUrl).toString(),
    },
  };
}

/** Serializza JSON-LD in modo sicuro dentro un tag <script>. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
