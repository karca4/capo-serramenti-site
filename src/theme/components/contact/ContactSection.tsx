import type { ReactNode } from "react";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { site } from "../../config/site";
import { formatAddress } from "../../lib/format";
import SocialIcon, { whatsappUrl } from "../common/SocialIcon";
import ContactCard from "./ContactCard";
import MapEmbed from "./MapEmbed";

function QuickAction({
  href,
  icon,
  label,
  detail,
  external = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  detail: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="group dark:bg-gray-dark flex flex-col gap-3 rounded-2xl border border-black/5 bg-white p-4 transition-shadow hover:shadow-lg sm:p-5 dark:border-white/10"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="bg-primary flex h-11 w-11 items-center justify-center rounded-xl text-xl text-white dark:bg-white dark:text-black">
        {icon}
      </span>
      <span>
        <span className="block font-semibold text-black dark:text-white">
          {label}
        </span>
        <span className="text-body-color dark:text-body-color-dark block truncate text-sm">
          {detail}
        </span>
      </span>
    </a>
  );
}

const ContactSection = () => {
  const { about, location, quote } = site.pages.contact;
  const { address, map, emails, phones } = site.contacts;
  const phone = phones[0];
  const whatsapp = phones.find((p) => p.whatsapp);
  const primaryEmail = emails[0];

  return (
    <section className="py-10 md:py-16 lg:py-20">
      <div className="container">
        {/* Su smartphone le azioni rapide vengono prima di tutto il resto. */}
        <div className="mb-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mb-14 lg:grid-cols-4">
          {phone && (
            <QuickAction
              href={`tel:${phone.number}`}
              icon={<LuPhone aria-hidden />}
              label="Chiama"
              detail={phone.display}
            />
          )}
          {whatsapp && (
            <QuickAction
              href={whatsappUrl(whatsapp.number)}
              icon={<SocialIcon network="whatsapp" />}
              label="WhatsApp"
              detail="Scrivici un messaggio"
              external
            />
          )}
          {primaryEmail && (
            <QuickAction
              href={`mailto:${primaryEmail.address}`}
              icon={<LuMail aria-hidden />}
              label="Email"
              detail={primaryEmail.address}
            />
          )}
          {map && (
            <QuickAction
              href={map.directionsUrl}
              icon={<LuMapPin aria-hidden />}
              label="Indicazioni"
              detail={`${address.city} (${address.province})`}
              external
            />
          )}
        </div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl dark:text-white">
              {location.title}
            </h2>
            <p className="text-body-color dark:text-body-color-dark text-base">
              {location.text}{" "}
              <strong className="text-black dark:text-white">
                {formatAddress(address)}
              </strong>
            </p>
            <p className="text-body-color dark:text-body-color-dark mt-2 text-base">
              {site.serviceArea}
            </p>
            {map && (
              <MapEmbed
                title={`Mappa della sede ${site.name} a ${address.city}`}
                embedUrl={map.embedUrl}
                directionsUrl={map.directionsUrl}
              />
            )}

            <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl dark:text-white">
              {about.title}
            </h2>
            <div className="text-body-color dark:text-body-color-dark space-y-4 text-base leading-relaxed">
              {about.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="bg-gray-light dark:bg-gray-dark mt-10 rounded-2xl p-6 sm:p-8">
              <h2 className="mb-3 text-xl font-bold text-black md:text-2xl dark:text-white">
                {quote.title}
              </h2>
              <div className="text-body-color dark:text-body-color-dark space-y-4 text-base leading-relaxed">
                {quote.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
                {primaryEmail && (
                  <p>
                    {quote.emailCta.before}{" "}
                    <a
                      href={`mailto:${primaryEmail.address}`}
                      className="text-primary font-semibold break-all underline dark:text-white"
                    >
                      {primaryEmail.address}
                    </a>{" "}
                    {quote.emailCta.after}
                  </p>
                )}
              </div>
            </div>
          </div>

          <aside className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <ContactCard />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
