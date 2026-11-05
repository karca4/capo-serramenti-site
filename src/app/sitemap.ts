import type { MetadataRoute } from "next";
import { site } from "@/theme/config/site";
import { blogPath, productPath } from "@/theme/lib/routes";
import { siteUrl } from "@/theme/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/company", "/gallery", "/contact", "/privacy"];
  if (site.blog.length > 0) pages.push("/blog");
  return [
    ...pages.map((path) => ({ url: `${siteUrl}${path}` })),
    ...site.products.map((p) => ({ url: `${siteUrl}${productPath(p)}` })),
    ...site.blog.map((p) => ({
      url: `${siteUrl}${blogPath(p)}`,
      lastModified: p.updatedDate ?? p.publishDate,
    })),
  ];
}
