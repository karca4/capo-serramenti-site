import { getImageProps } from "next/image";
import { site } from "../../config/site";
import { ButtonLink, type ButtonVariant } from "../common/Button";

const ctaVariant: Record<"primary" | "secondary", ButtonVariant> = {
  primary: "accent",
  secondary: "outline-light",
};

type HeroImage = NonNullable<typeof site.home.hero.image>;

/**
 * Foto di sfondo con art direction: verticale su mobile, orizzontale da
 * tablet in su. Con <picture> il browser scarica una sola delle due varianti.
 */
function HeroPhoto({ image }: { image: HeroImage }) {
  const common = {
    alt: image.alt,
    fill: true,
    priority: true,
    sizes: "100vw",
    className: "object-cover",
  };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, src: image.desktop });
  const {
    props: { srcSet: mobileSrcSet, ...imgProps },
  } = getImageProps({ ...common, src: image.mobile });

  return (
    <>
      <picture>
        <source
          media="(min-width: 768px)"
          srcSet={desktopSrcSet}
          sizes="100vw"
        />
        <source srcSet={mobileSrcSet} sizes="100vw" />
        {/* eslint-disable-next-line jsx-a11y/alt-text -- alt arriva da getImageProps */}
        <img {...imgProps} fetchPriority="high" />
      </picture>
      {/* Su mobile il testo sta in basso, a portata di pollice: la
          sfumatura è più scura in fondo. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/40 md:bg-gradient-to-r md:from-black/85 md:via-black/55 md:to-black/20"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/60 to-transparent"
      />
    </>
  );
}

/** Sfondo senza foto: colore primario del brand con riflessi dell'accento. */
function HeroBackdrop() {
  return (
    <div aria-hidden className="bg-primary absolute inset-0">
      <div className="bg-accent/25 absolute -right-24 -bottom-24 h-80 w-80 rounded-full blur-3xl md:h-[28rem] md:w-[28rem]" />
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
    </div>
  );
}

const Hero = () => {
  const { hero } = site.home;

  return (
    <section
      id="home"
      className={`relative flex overflow-hidden ${
        hero.image
          ? "min-h-[100svh] items-end md:items-center"
          : "min-h-[85svh] items-center"
      }`}
    >
      {hero.image ? <HeroPhoto image={hero.image} /> : <HeroBackdrop />}

      <div className="relative z-10 container pt-28 pb-10 md:py-32">
        <div className="max-w-[720px]">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-white uppercase backdrop-blur-sm sm:text-sm">
            <span aria-hidden className="bg-accent h-2 w-2 rounded-full" />
            {hero.eyebrow}
          </p>

          <h1 className="mb-5 text-[2.25rem] leading-[1.1] font-bold text-white sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>

          <p className="mb-8 max-w-[600px] text-base leading-relaxed text-white/85 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            {hero.ctas.map((cta) => (
              <ButtonLink
                key={cta.href}
                href={cta.href}
                variant={ctaVariant[cta.variant]}
                className="w-full sm:w-auto"
              >
                {cta.label}
              </ButtonLink>
            ))}
          </div>

          {hero.highlights.length > 0 && (
            <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-white/20 pt-6 sm:gap-8">
              {hero.highlights.map((h) => (
                <div key={h.strong}>
                  <dt className="text-sm leading-snug font-semibold text-white sm:text-base">
                    {h.strong}
                  </dt>
                  {h.text && (
                    <dd className="mt-0.5 text-xs text-white/70 sm:text-sm">
                      {h.text}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
