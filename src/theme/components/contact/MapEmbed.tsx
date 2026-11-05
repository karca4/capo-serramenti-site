"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { LuMapPin } from "react-icons/lu";
import { buttonClass } from "../common/Button";

const STORAGE_KEY = "consent:google-maps";
const CONSENT_EVENT = "maps-consent-change";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function readConsent() {
  try {
    return localStorage.getItem(STORAGE_KEY) === "granted";
  } catch {
    return false;
  }
}

function grantConsent() {
  try {
    localStorage.setItem(STORAGE_KEY, "granted");
  } catch {
    // localStorage non disponibile (es. navigazione privata): vale per la sessione.
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

/**
 * Google Maps imposta cookie di terze parti: l'iframe viene caricato solo
 * dopo un consenso esplicito, che resta memorizzato nel browser.
 */
export default function MapEmbed({
  embedUrl,
  directionsUrl,
  title,
}: {
  embedUrl: string;
  directionsUrl: string;
  title: string;
}) {
  const consented = useSyncExternalStore(subscribe, readConsent, () => false);

  if (consented) {
    return (
      <iframe
        title={title}
        src={embedUrl}
        className="my-8 aspect-[4/3] w-full rounded-2xl border-0 md:aspect-video"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    );
  }

  return (
    <div className="bg-gray-light dark:bg-gray-dark my-8 flex aspect-[4/3] w-full flex-col items-center justify-center gap-4 rounded-2xl px-6 text-center md:aspect-video">
      <LuMapPin aria-hidden className="text-primary text-4xl dark:text-white" />
      <p className="text-body-color dark:text-body-color-dark max-w-[420px] text-sm">
        La mappa è fornita da Google Maps, che potrebbe impostare cookie di
        terze parti. Maggiori dettagli nella{" "}
        <Link href="/privacy" className="underline">
          privacy e cookie policy
        </Link>
        .
      </p>
      <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
        <button
          type="button"
          onClick={grantConsent}
          className={buttonClass("primary")}
        >
          Mostra la mappa
        </button>
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass("outline")}
        >
          Apri in Google Maps
        </a>
      </div>
    </div>
  );
}
