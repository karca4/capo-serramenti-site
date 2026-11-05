import { site } from "../../config/site";
import SectionTitle from "../common/SectionTitle";

/** Passi del servizio: linea verticale su smartphone, 4 colonne da desktop. */
const ProcessSection = () => {
  const process = site.home.process;
  if (!process || process.steps.length === 0) return null;

  return (
    <section className="py-14 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle {...process.intro} />
        <ol className="grid gap-0 lg:grid-cols-4 lg:gap-6">
          {process.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative flex gap-4 pb-8 last:pb-0 lg:flex-col lg:gap-5 lg:pb-0"
            >
              {/* Linea che collega i passi */}
              {i < process.steps.length - 1 && (
                <span
                  aria-hidden
                  className="bg-primary/15 absolute top-12 bottom-0 left-[1.375rem] w-px lg:top-[1.375rem] lg:right-0 lg:bottom-auto lg:left-14 lg:h-px lg:w-auto dark:bg-white/15"
                />
              )}
              <span className="bg-primary relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-base font-bold text-white dark:bg-white dark:text-black">
                {i + 1}
              </span>
              <div>
                <h3 className="mb-1.5 text-lg font-semibold text-black dark:text-white">
                  {step.title}
                </h3>
                <p className="text-body-color dark:text-body-color-dark text-base leading-relaxed">
                  {step.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProcessSection;
