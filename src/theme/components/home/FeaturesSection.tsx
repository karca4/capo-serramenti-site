import { site } from "../../config/site";
import FeatureIcon from "../common/FeatureIcon";
import SectionTitle from "../common/SectionTitle";

/** Punti di forza: 2 colonne su smartphone, 4 da desktop. */
const FeaturesSection = () => {
  const features = site.home.features;
  if (!features || features.items.length === 0) return null;

  return (
    <section className="py-14 md:py-20 lg:py-24">
      <div className="container">
        <SectionTitle {...features.intro} />
        <ul className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {features.items.map((item) => (
            <li
              key={item.title}
              className="dark:bg-gray-dark rounded-2xl border border-black/5 bg-white p-4 sm:p-6 dark:border-white/10"
            >
              <span className="bg-primary/5 text-primary mb-4 flex h-11 w-11 items-center justify-center rounded-xl text-xl dark:bg-white/10 dark:text-white">
                <FeatureIcon name={item.icon} />
              </span>
              <h3 className="mb-1.5 text-base font-semibold text-black sm:text-lg dark:text-white">
                {item.title}
              </h3>
              <p className="text-body-color dark:text-body-color-dark text-sm leading-relaxed sm:text-base">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FeaturesSection;
