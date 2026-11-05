"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { LuChevronDown, LuMenu } from "react-icons/lu";
import type {
  LogoImage,
  Link as NavLink,
  NavItem,
  Phone,
} from "../../config/types";
import { buttonClass } from "../common/Button";
import ThemedLogo from "../common/ThemedLogo";
import MobileMenu from "./MobileMenu";
import ThemeToggler from "./ThemeToggler";

export interface HeaderProps {
  navigation: NavItem[];
  logo: LogoImage;
  siteName: string;
  phone?: Phone;
  whatsappUrl?: string;
  quote: NavLink;
}

// Riceve solo i dati che servono come props: importare la configurazione
// in un client component la includerebbe tutta nel bundle del browser.
const Header = (props: HeaderProps) => {
  const { navigation, logo, siteName, quote } = props;
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Chiude menu e tendine a ogni cambio di pagina. Aggiornare lo stato
  // durante il render (invece che in un effect) evita un render a vuoto.
  const [lastPathname, setLastPathname] = useState(pathname);
  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setMenuOpen(false);
    setOpenIndex(-1);
  }

  useEffect(() => {
    if (openIndex === -1) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenIndex(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  // Stabile tra i render: il menu mobile la usa come dipendenza di un effect.
  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    burgerRef.current?.focus();
  }, []);

  // In home l'header sta sopra la foto a tutto schermo: testi chiari
  // finché non si scorre la pagina.
  const overHero = pathname === "/" && !scrolled;
  const isActive = (href?: string) => !!href && pathname === href;

  const linkTone = overHero
    ? "text-white hover:text-white/80"
    : "text-black hover:text-primary dark:text-white/80 dark:hover:text-white";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-300 ${
          scrolled
            ? "bg-white/90 shadow-[0_1px_0_rgba(18,23,35,0.08)] backdrop-blur-md dark:bg-black/85 dark:shadow-[0_1px_0_rgba(255,255,255,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container flex h-16 items-center justify-between gap-4 lg:h-20">
          <Link
            href="/"
            aria-label={`${siteName} - home`}
            className={`shrink-0 ${overHero ? "drop-shadow-[0_2px_6px_rgba(0,0,0,0.45)]" : ""}`}
          >
            <ThemedLogo
              logo={logo}
              alt={siteName}
              onDark={overHero}
              priority
              className="h-9 w-auto lg:h-11"
            />
          </Link>

          {/* Navigazione desktop */}
          <nav aria-label="Menu principale" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navigation.map((item, index) =>
                item.children ? (
                  <li
                    key={item.label}
                    className="group relative"
                    onMouseLeave={() => setOpenIndex(-1)}
                    // Tastiera: Invio apre, Esc chiude e torna al pulsante,
                    // uscire con Tab chiude.
                    onKeyDown={(e) => {
                      if (e.key === "Escape" && openIndex === index) {
                        setOpenIndex(-1);
                        e.currentTarget.querySelector("button")?.focus();
                      }
                    }}
                    onBlur={(e) => {
                      if (!e.currentTarget.contains(e.relatedTarget)) {
                        setOpenIndex(-1);
                      }
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenIndex((i) => (i === index ? -1 : index))
                      }
                      aria-expanded={openIndex === index}
                      aria-controls={`submenu-${index}`}
                      className={`flex items-center gap-1 rounded-lg px-3 py-2 text-[0.95rem] font-medium transition-colors ${linkTone}`}
                    >
                      {item.label}
                      <LuChevronDown
                        aria-hidden
                        className="transition-transform group-hover:rotate-180"
                      />
                    </button>
                    <div
                      id={`submenu-${index}`}
                      className={`absolute top-full left-0 pt-2 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 ${
                        openIndex === index
                          ? "visible translate-y-0 opacity-100"
                          : "invisible translate-y-1 opacity-0"
                      }`}
                    >
                      <ul className="dark:bg-gray-dark w-72 rounded-2xl border border-black/5 bg-white p-2 shadow-xl dark:border-white/10">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href ?? "#"}
                              aria-current={
                                isActive(child.href) ? "page" : undefined
                              }
                              className={`block rounded-xl px-3 py-2.5 text-[0.95rem] transition-colors ${
                                isActive(child.href)
                                  ? "bg-primary/5 text-primary font-medium dark:bg-white/10 dark:text-white"
                                  : "text-black hover:bg-gray-100 dark:text-white/80 dark:hover:bg-white/5"
                              }`}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={item.label}>
                    <Link
                      href={item.href ?? "#"}
                      {...(item.newTab
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      aria-current={isActive(item.href) ? "page" : undefined}
                      className={`relative block rounded-lg px-3 py-2 text-[0.95rem] font-medium transition-colors ${linkTone} ${
                        isActive(item.href)
                          ? "after:bg-accent after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <div className="flex items-center gap-1 lg:gap-2">
            <ThemeToggler overHero={overHero} />
            <div className="hidden lg:block">
              <Link
                href={quote.href}
                className={buttonClass("accent", { size: "sm" })}
              >
                {quote.label}
              </Link>
            </div>

            <button
              ref={burgerRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Apri il menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className={`flex h-11 w-11 items-center justify-center rounded-full lg:hidden ${
                overHero
                  ? "text-white hover:bg-white/10"
                  : "text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
              }`}
            >
              <LuMenu aria-hidden className="text-2xl" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu {...props} open={menuOpen} onClose={closeMenu} />
    </>
  );
};

export default Header;
