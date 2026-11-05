import Link from "next/link";
import BlogCard from "@/theme/components/blog/BlogCard";
import PageHeader from "@/theme/components/common/PageHeader";
import { site } from "@/theme/config/site";
import { pageMetadata } from "@/theme/lib/seo";

// Finché non ci sono articoli la pagina non va indicizzata.
export const metadata = pageMetadata(site.seo.pages.blog, "/blog", {
  noindex: site.blog.length === 0,
});

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="News"
        description={site.pages.blog.intro}
        path="/blog"
      />

      <section className="py-14 md:py-20">
        <div className="container">
          {site.blog.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {site.blog.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="border-primary/10 dark:bg-dark mx-auto max-w-[540px] rounded-lg border bg-white px-8 py-16 text-center dark:border-white/10">
              <h2 className="mb-3 text-xl font-bold text-black dark:text-white">
                Presto nuovi contenuti
              </h2>
              <p className="text-body-color dark:text-body-color-dark mx-auto mb-8 max-w-[380px] text-base leading-relaxed">
                Stiamo preparando nuovi contenuti. Nel frattempo, contattaci per
                una consulenza.
              </p>
              <Link
                href="/contact"
                className="bg-primary hover:bg-primary/90 inline-block rounded-lg px-7 py-3.5 text-base font-semibold text-white transition-colors"
              >
                Richiedi un preventivo
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
