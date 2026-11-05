import Image from "next/image";
import { LuCheck } from "react-icons/lu";
import { site } from "../../config/site";
import SectionTitle from "../common/SectionTitle";

/**
 * Sezioni "chi siamo": immagine sopra il testo su smartphone, affiancate
 * da desktop con lato alternato.
 */
const CompanySections = () => {
  const { sections } = site.pages.company;

  return (
    <div>
      {sections.map((section, i) => {
        const highlights = section.highlights.flat();
        const reversed = i % 2 === 1;
        return (
          <section
            key={section.id}
            id={section.id}
            className={`py-14 md:py-20 lg:py-24 ${
              reversed ? "bg-gray-light dark:bg-gray-dark" : ""
            }`}
          >
            <div className="container grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div
                className={`relative aspect-4/3 overflow-hidden rounded-2xl ${
                  reversed ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={section.image.src}
                  alt={section.image.alt}
                  fill
                  sizes="(min-width: 992px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>

              <div>
                <SectionTitle
                  title={section.title}
                  paragraph={section.paragraph}
                  className="md:mb-8"
                />
                <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                  {highlights.map((text) => (
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
          </section>
        );
      })}
    </div>
  );
};

export default CompanySections;
