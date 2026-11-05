import { site } from "../config/site";

/**
 * URL pubblico del sito, usato per metadataBase, canonical, sitemap e robots.
 * Su Vercel (produzione e preview) è il dominio ufficiale `site.url`, in
 * locale localhost. NEXT_PUBLIC_SITE_URL permette di forzarlo.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL ? site.url : "http://localhost:3000")
).replace(/\/$/, "");
