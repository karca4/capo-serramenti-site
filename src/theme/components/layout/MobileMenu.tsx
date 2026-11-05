"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuPhone, LuX } from "react-icons/lu";
import { ButtonLink } from "../common/Button";
import SocialIcon from "../common/SocialIcon";
import ThemedLogo from "../common/ThemedLogo";
import type { HeaderProps } from "./Header";

/** Menu a schermo intero per smartphone e tablet. */
export default function MobileMenu({
  navigation,
  logo,
  siteName,
  phone,
  whatsappUrl,
  quote,
  open,
  onClose,
}: HeaderProps & { open: boolean; onClose: () => void }) {
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const [expanded, setExpanded] = useState<string | null>(null);

  // Blocca lo scroll della pagina sotto il menu e gestisce Esc e focus.
  useEffect(() => {
    if (!open) return;
    const { body } = document;
    const prevOverflow = body.style.overflow;
    body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      className={`fixed inset-0 z-[60] flex flex-col bg-white transition-[transform,visibility] duration-300 ease-out lg:hidden dark:bg-black ${
        open ? "visible translate-x-0" : "invisible translate-x-full"
      }`}
    >
      <div className="container flex h-16 shrink-0 items-center justify-between">
        <Link href="/" onClick={onClose} aria-label={`${siteName} - home`}>
          <ThemedLogo logo={logo} alt={siteName} className="h-9 w-auto" />
        </Link>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Chiudi il menu"
          className="flex h-11 w-11 items-center justify-center rounded-full text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
        >
          <LuX aria-hidden className="text-2xl" />
        </button>
      </div>

      <nav aria-label="Menu principale" className="flex-1 overflow-y-auto">
        <ul className="container">
          {navigation.map((item) => {
            const isOpen = expanded === item.label;
            return (
              <li
                key={item.label}
                className="border-b border-black/5 dark:border-white/10"
              >
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      aria-expanded={isOpen}
                      className="flex min-h-14 w-full items-center justify-between text-lg font-semibold text-black dark:text-white"
                    >
                      {item.label}
                      <LuChevronDown
                        aria-hidden
                        className={`text-xl transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <ul className={`pb-3 ${isOpen ? "block" : "hidden"}`}>
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <Link
                            href={child.href ?? "#"}
                            onClick={onClose}
                            aria-current={
                              pathname === child.href ? "page" : undefined
                            }
                            className={`flex min-h-12 items-center rounded-xl px-4 text-base ${
                              pathname === child.href
                                ? "bg-primary/5 text-primary font-medium dark:bg-white/10 dark:text-white"
                                : "text-body-color dark:text-body-color-dark"
                            }`}
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={item.href ?? "#"}
                    onClick={onClose}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`flex min-h-14 items-center text-lg font-semibold ${
                      pathname === item.href
                        ? "text-primary dark:text-white"
                        : "text-black dark:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="container shrink-0 space-y-3 border-t border-black/5 pt-4 pb-[calc(1rem+env(safe-area-inset-bottom))] dark:border-white/10">
        <ButtonLink href={quote.href} variant="accent" full onClick={onClose}>
          {quote.label}
        </ButtonLink>
        <div className="grid grid-cols-2 gap-3">
          {phone && (
            <ButtonLink href={`tel:${phone.number}`} variant="outline" full>
              <LuPhone aria-hidden /> Chiama
            </ButtonLink>
          )}
          {whatsappUrl && (
            <ButtonLink href={whatsappUrl} variant="outline" full external>
              <SocialIcon network="whatsapp" /> WhatsApp
            </ButtonLink>
          )}
        </div>
      </div>
    </div>
  );
}
