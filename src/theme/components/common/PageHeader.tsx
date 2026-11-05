import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import { breadcrumbJsonLd, jsonLdScript } from "../../lib/seo";

/** Intestazione delle pagine interne: percorso, titolo e descrizione. */
const PageHeader = ({
  title,
  description,
  path,
}: {
  title: string;
  description?: string;
  /** Percorso della pagina: se presente aggiunge il BreadcrumbList per Google. */
  path?: string;
}) => {
  return (
    <section className="bg-gray-light dark:bg-gray-dark relative overflow-hidden pt-24 pb-10 md:pt-32 md:pb-14">
      <div
        aria-hidden
        className="bg-primary/5 absolute -top-24 -right-24 h-64 w-64 rounded-full blur-3xl dark:bg-white/5"
      />
      {path && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(breadcrumbJsonLd([{ name: title, path }])),
          }}
        />
      )}
      <div className="relative container">
        <nav aria-label="Percorso" className="mb-4">
          <ol className="text-body-color dark:text-body-color-dark flex items-center gap-1.5 text-sm">
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
            <li
              aria-current="page"
              className="text-primary font-medium dark:text-white"
            >
              {title}
            </li>
          </ol>
        </nav>
        <h1 className="mb-3 text-3xl leading-tight font-bold text-black md:text-[2.75rem] dark:text-white">
          {title}
        </h1>
        {description && (
          <p className="text-body-color dark:text-body-color-dark max-w-[640px] text-base leading-relaxed md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
