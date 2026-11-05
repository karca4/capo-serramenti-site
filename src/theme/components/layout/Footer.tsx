import Link from "next/link";
import { LuClock, LuMail, LuMapPin, LuPhone } from "react-icons/lu";
import { site } from "../../config/site";
import { formatAddress, formatOpeningHours } from "../../lib/format";
import SocialIcon, { whatsappUrl } from "../common/SocialIcon";
import ThemedLogo from "../common/ThemedLogo";

const linkClass =
  "text-body-color hover:text-primary dark:text-body-color-dark inline-flex min-h-10 items-center gap-2 text-base transition-colors dark:hover:text-white";
const headingClass =
  "mb-3 text-sm font-semibold tracking-wide text-black uppercase dark:text-white";

const Footer = () => {
  const { phones, emails, address, map } = site.contacts;
  const whatsapp = phones.find((p) => p.whatsapp);
  const primaryEmail = emails[0];
  const year = new Date().getFullYear();

  const socialLinks = [
    ...site.social,
    ...(whatsapp
      ? [
          {
            network: "whatsapp" as const,
            label: "WhatsApp",
            url: whatsappUrl(whatsapp.number),
          },
        ]
      : []),
  ];

  return (
    <footer className="dark:bg-gray-dark border-t border-black/5 bg-white dark:border-white/10">
      <div className="container grid gap-10 py-12 md:grid-cols-2 md:py-16 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Link href="/" className="mb-5 inline-block">
            <ThemedLogo
              logo={site.logo.mark}
              alt={`${site.name} - torna alla home`}
              className="h-12 w-auto"
            />
          </Link>
          <p className="text-body-color dark:text-body-color-dark mb-5 max-w-[320px] text-base leading-relaxed">
            {site.seo.description}
          </p>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ network, label, url }) => (
              <a
                key={url}
                href={url}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-light text-primary hover:bg-primary flex h-11 w-11 items-center justify-center rounded-full text-lg transition-colors hover:text-white dark:bg-white/5 dark:text-white dark:hover:bg-white/15"
              >
                <SocialIcon network={network} />
              </a>
            ))}
          </div>
        </div>

        <div className="lg:col-span-4">
          <h2 className={headingClass}>Contatti</h2>
          <ul>
            {phones.map((phone) => (
              <li key={phone.number}>
                <a href={`tel:${phone.number}`} className={linkClass}>
                  <LuPhone aria-hidden className="shrink-0" />
                  {phone.display}
                </a>
              </li>
            ))}
            {primaryEmail && (
              <li>
                <a
                  href={`mailto:${primaryEmail.address}`}
                  className={`${linkClass} break-all`}
                >
                  <LuMail aria-hidden className="shrink-0" />
                  {primaryEmail.address}
                </a>
              </li>
            )}
            <li>
              {map ? (
                <a
                  href={map.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClass}
                >
                  <LuMapPin aria-hidden className="shrink-0" />
                  {formatAddress(address)}
                </a>
              ) : (
                <span className={linkClass}>
                  <LuMapPin aria-hidden className="shrink-0" />
                  {formatAddress(address)}
                </span>
              )}
            </li>
            {site.openingHours?.length ? (
              <li className="text-body-color dark:text-body-color-dark flex gap-2 py-2 text-base">
                <LuClock aria-hidden className="mt-1 shrink-0" />
                <span>
                  {formatOpeningHours(site.openingHours).map((row) => (
                    <span key={row.days} className="block">
                      {row.days}: {row.hours}
                    </span>
                  ))}
                </span>
              </li>
            ) : null}
          </ul>
        </div>

        <nav aria-label="Link rapidi" className="lg:col-span-4">
          <h2 className={headingClass}>Link rapidi</h2>
          <ul className="grid grid-cols-2 gap-x-6">
            {site.footerLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={linkClass}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-black/5 dark:border-white/10">
        <div className="text-body-color dark:text-body-color-dark container flex flex-col gap-1 py-5 text-sm md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {site.legalName} · P.IVA {site.vatNumber}
            {site.rea && <> · REA {site.rea}</>}
            {site.shareCapital && <> · Cap. soc. {site.shareCapital}</>}
          </p>
          <Link
            href="/privacy"
            className="hover:text-primary dark:hover:text-white"
          >
            Privacy e cookie policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
