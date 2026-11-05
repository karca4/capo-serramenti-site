import PageHeader from "@/theme/components/common/PageHeader";
import Gallery from "@/theme/components/gallery/Gallery";
import { site } from "@/theme/config/site";
import { pageMetadata } from "@/theme/lib/seo";

export const metadata = pageMetadata(site.seo.pages.gallery, "/gallery");

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Galleria"
        description={site.pages.gallery.intro}
        path="/gallery"
      />
      {site.pages.gallery.text?.length ? (
        <section className="pt-10 md:pt-14">
          <div className="container">
            <div className="text-body-color dark:text-body-color-dark max-w-[820px] space-y-4 text-base leading-relaxed md:text-lg">
              {site.pages.gallery.text.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
        </section>
      ) : null}
      <Gallery siteName={site.name} />
    </>
  );
}
