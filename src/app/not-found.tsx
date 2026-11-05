import type { Metadata } from "next";
import { ButtonLink } from "@/theme/components/common/Button";

export const metadata: Metadata = {
  title: "Pagina non trovata",
};

export default function NotFound() {
  return (
    <section className="pt-32 pb-20 lg:pt-44 lg:pb-28">
      <div className="container">
        <div className="mx-auto max-w-[530px] text-center">
          <p className="text-primary mb-4 text-7xl font-bold dark:text-white">
            404
          </p>
          <h1 className="mb-4 text-3xl font-bold text-black sm:text-4xl dark:text-white">
            Pagina non trovata
          </h1>
          <p className="text-body-color dark:text-body-color-dark mb-10 text-base leading-relaxed sm:text-lg">
            La pagina che cerchi non esiste o è stata spostata.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href="/" variant="primary">
              Torna alla home
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline">
              Contattaci
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
