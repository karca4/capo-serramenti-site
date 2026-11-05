"use client";

import { useEffect, useState } from "react";
import { LuArrowUp } from "react-icons/lu";

const SHOW_AFTER_PX = 300;

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Torna all'inizio della pagina"
      className="bg-primary hover:bg-primary-light fixed right-8 bottom-8 z-40 hidden h-12 w-12 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-colors lg:flex dark:bg-white dark:text-black"
    >
      <LuArrowUp aria-hidden className="text-xl" />
    </button>
  );
}
