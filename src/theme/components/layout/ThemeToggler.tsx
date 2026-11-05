"use client";

import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

/**
 * Le icone sono scelte via CSS (classe .dark sull'html): così il markup è
 * identico tra server e client e non ci sono problemi di idratazione.
 */
const ThemeToggler = ({ overHero = false }: { overHero?: boolean }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const toggle = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Cambia tema chiaro/scuro"
      className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
        overHero
          ? "text-white hover:bg-white/10"
          : "text-black hover:bg-black/5 dark:text-white dark:hover:bg-white/10"
      }`}
    >
      <LuMoon aria-hidden className="text-xl dark:hidden" />
      <LuSun aria-hidden className="hidden text-xl dark:block" />
    </button>
  );
};

export default ThemeToggler;
