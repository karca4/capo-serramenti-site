import { LuArrowUpRight } from "react-icons/lu";
import { site } from "../../config/site";
import SectionTitle from "../common/SectionTitle";
import ThemedLogo from "../common/ThemedLogo";

/** Aziende partner: logo (o nome), con link al loro sito se indicato. */
const PartnersSection = () => {
  if (!site.partners?.items.length) return null;
  const { intro, items } = site.partners;

  return (
    <section id="partner" className="py-14 md:py-20">
      <div className="container">
        <SectionTitle {...intro} />
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((partner) => {
            const content = (
              <>
                <span className="flex min-h-12 items-center justify-between gap-4">
                  {partner.logo ? (
                    <ThemedLogo
                      logo={partner.logo}
                      alt={partner.name}
                      className="h-10 w-auto"
                    />
                  ) : (
                    <span className="font-display text-primary text-2xl font-bold tracking-wide dark:text-white">
                      {partner.name}
                    </span>
                  )}
                  {partner.url && (
                    <LuArrowUpRight
                      aria-hidden
                      className="text-body-color group-hover:text-primary shrink-0 text-xl transition-colors dark:group-hover:text-white"
                    />
                  )}
                </span>
                {partner.description && (
                  <span className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                    {partner.description}
                  </span>
                )}
              </>
            );
            const card =
              "dark:bg-dark flex h-full flex-col gap-3 rounded-2xl border border-black/5 bg-white p-5 sm:p-6 dark:border-white/10";

            return (
              <li key={partner.name}>
                {partner.url ? (
                  <a
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group ${card} transition-shadow hover:shadow-lg`}
                  >
                    {content}
                    <span className="sr-only">
                      {" "}
                      (si apre in una nuova scheda)
                    </span>
                  </a>
                ) : (
                  <div className={card}>{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default PartnersSection;
