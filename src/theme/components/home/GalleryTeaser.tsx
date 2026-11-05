import Image from "next/image";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { site } from "../../config/site";
import { getGalleryImages, type GalleryImage } from "../../lib/cloudinary";
import { buttonClass } from "../common/Button";
import SectionTitle from "../common/SectionTitle";

/**
 * Anteprima delle ultime foto. Usa la stessa cache lato server della
 * galleria; se Cloudinary non risponde la sezione semplicemente non appare.
 */
const GalleryTeaser = async () => {
  const teaser = site.home.gallery;
  if (!teaser) return null;

  let images: GalleryImage[] = [];
  try {
    images = (await getGalleryImages()).slice(0, teaser.count);
  } catch (e) {
    console.error("[GalleryTeaser]", e instanceof Error ? e.message : e);
  }
  if (images.length === 0) return null;

  return (
    <section className="bg-gray-light dark:bg-gray-dark py-14 md:py-20 lg:py-24">
      <div className="container">
        <div className="md:flex md:items-end md:justify-between md:gap-8">
          <SectionTitle {...teaser.intro} />
          <div className="mb-14 hidden shrink-0 md:block">
            <Link href="/gallery" className={buttonClass("outline")}>
              Vedi tutti i lavori <LuArrowRight aria-hidden />
            </Link>
          </div>
        </div>
        <ul className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3">
          {images.map((img, i) => (
            <li
              key={img.publicId}
              className="relative aspect-square overflow-hidden rounded-xl sm:rounded-2xl"
            >
              <Image
                src={img.url}
                alt={img.description || `Progetto ${site.name} ${i + 1}`}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
        <div className="mt-6 md:hidden">
          <Link
            href="/gallery"
            className={buttonClass("outline", { full: true })}
          >
            Vedi tutti i lavori <LuArrowRight aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryTeaser;
