import { LuPhone } from "react-icons/lu";
import { site } from "../../config/site";
import { ButtonLink } from "./Button";
import SocialIcon, { whatsappUrl } from "./SocialIcon";

/** Invito finale all'azione: preventivo, chiamata e WhatsApp. */
const CtaBand = () => {
  const { cta } = site;
  const phone = site.contacts.phones[0];
  const whatsapp = site.contacts.phones.find((p) => p.whatsapp);

  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <div className="bg-primary relative overflow-hidden rounded-3xl px-6 py-10 text-center sm:px-10 md:py-14">
          <div
            aria-hidden
            className="bg-accent/20 absolute -top-20 -right-20 h-56 w-56 rounded-full blur-3xl"
          />
          <div className="relative mx-auto max-w-[620px]">
            <h2 className="mb-3 text-[1.75rem] leading-tight font-bold text-white md:text-4xl">
              {cta.title}
            </h2>
            <p className="mb-8 text-base text-white/80 md:text-lg">
              {cta.text}
            </p>
            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={cta.quote.href} variant="accent">
                {cta.quote.label}
              </ButtonLink>
              {phone && (
                <ButtonLink
                  href={`tel:${phone.number}`}
                  variant="outline-light"
                >
                  <LuPhone aria-hidden /> {phone.display}
                </ButtonLink>
              )}
              {whatsapp && (
                <ButtonLink
                  href={whatsappUrl(whatsapp.number)}
                  variant="outline-light"
                  external
                >
                  <SocialIcon network="whatsapp" /> WhatsApp
                </ButtonLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBand;
