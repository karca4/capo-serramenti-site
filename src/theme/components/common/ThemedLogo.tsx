import Image from "next/image";
import type { LogoImage } from "../../config/types";

/**
 * Logo che passa alla versione chiara (`logo.light`) sul tema scuro o, con
 * `onDark`, sopra una foto. Senza versione chiara mostra sempre il logo
 * normale. La scelta avviene via CSS, quindi funziona anche nei server
 * component e non crea differenze di idratazione.
 */
export default function ThemedLogo({
  logo,
  alt,
  onDark = false,
  priority = false,
  className = "",
}: {
  logo: LogoImage;
  alt: string;
  onDark?: boolean;
  priority?: boolean;
  className?: string;
}) {
  const common = { width: logo.width, height: logo.height, priority };

  if (!logo.light) {
    return <Image src={logo.src} alt={alt} className={className} {...common} />;
  }

  return (
    <>
      <Image
        src={logo.src}
        alt={alt}
        className={`${className} ${onDark ? "hidden" : "dark:hidden"}`}
        {...common}
      />
      <Image
        src={logo.light}
        alt={alt}
        className={`${className} ${onDark ? "" : "hidden dark:block"}`}
        {...common}
      />
    </>
  );
}
