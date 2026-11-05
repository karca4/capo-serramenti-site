import type { ReactNode } from "react";
import { LuClock, LuMail, LuPhone } from "react-icons/lu";
import { site } from "../../config/site";
import { formatOpeningHours } from "../../lib/format";
import SocialIcon, { whatsappUrl } from "../common/SocialIcon";

function Row({
  href,
  icon,
  label,
  value,
  external = false,
}: {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      className="group flex min-h-14 items-center gap-3 rounded-xl px-2 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-white/5"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="bg-primary/5 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg dark:bg-white/10 dark:text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="text-body-color dark:text-body-color-dark block text-xs">
          {label}
        </span>
        <span className="group-hover:text-primary block font-semibold break-words text-black dark:text-white dark:group-hover:text-white">
          {value}
        </span>
      </span>
    </a>
  );
}

/**
 * Riepilogo di tutti i recapiti. `compact` nasconde testi introduttivi e
 * social (usato a lato della pagina prodotto).
 */
const ContactCard = ({ compact = false }: { compact?: boolean }) => {
  const { box } = site.pages.contact;
  const { phones, emails } = site.contacts;
  const whatsapp = phones.find((p) => p.whatsapp);

  return (
    <div className="dark:bg-gray-dark rounded-2xl border border-black/5 bg-white p-5 sm:p-7 dark:border-white/10">
      <h2 className="mb-2 text-xl font-bold text-black dark:text-white">
        {box.title}
      </h2>
      {!compact && (
        <div className="text-body-color dark:text-body-color-dark mb-4 space-y-3 text-base leading-relaxed">
          {box.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      )}

      <div className="-mx-2 divide-y divide-black/5 dark:divide-white/10">
        {phones.map((phone) => (
          <Row
            key={phone.number}
            href={`tel:${phone.number}`}
            icon={<LuPhone aria-hidden />}
            label={phone.label}
            value={phone.display}
          />
        ))}
        {whatsapp && (
          <Row
            href={whatsappUrl(whatsapp.number)}
            icon={<SocialIcon network="whatsapp" />}
            label="WhatsApp"
            value={whatsapp.display}
            external
          />
        )}
        {emails.map((email) => (
          <Row
            key={email.address}
            href={`mailto:${email.address}`}
            icon={<LuMail aria-hidden />}
            label={email.label}
            value={email.address}
          />
        ))}
      </div>

      {site.openingHours?.length ? (
        <div className="mt-4 flex gap-3 border-t border-black/5 pt-4 dark:border-white/10">
          <span className="bg-primary/5 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-lg dark:bg-white/10 dark:text-white">
            <LuClock aria-hidden />
          </span>
          <div>
            <h3 className="text-body-color dark:text-body-color-dark text-xs">
              Orari
            </h3>
            <dl className="text-sm text-black dark:text-white">
              {formatOpeningHours(site.openingHours).map((row) => (
                <div key={row.days} className="flex gap-2">
                  <dt className="w-20 shrink-0 font-semibold whitespace-nowrap">
                    {row.days}
                  </dt>
                  <dd>{row.hours}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      ) : null}

      {!compact && site.social.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-black/5 pt-5 dark:border-white/10">
          {site.social.map((profile) => (
            <a
              key={profile.url}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-light text-primary hover:bg-primary inline-flex min-h-11 items-center gap-2 rounded-full px-4 text-sm font-semibold transition-colors hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white/15"
            >
              <SocialIcon network={profile.network} />
              {profile.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactCard;
