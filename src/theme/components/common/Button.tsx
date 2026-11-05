import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

export type ButtonVariant =
  "accent" | "primary" | "outline" | "light" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

// Sull'arancio d'accento il testo è scuro: in bianco non raggiungerebbe il
// contrasto minimo WCAG AA.
const variants: Record<ButtonVariant, string> = {
  accent: "bg-accent text-black hover:bg-accent-light",
  primary:
    "bg-primary text-white hover:bg-primary-light dark:bg-white dark:text-black dark:hover:bg-white/90",
  outline:
    "border border-primary/25 text-primary hover:border-primary hover:bg-primary/5 dark:border-white/25 dark:text-white dark:hover:border-white dark:hover:bg-white/5",
  light: "bg-white text-primary hover:bg-white/90",
  "outline-light":
    "border border-white/50 text-white hover:border-white hover:bg-white/10",
};

const sizes = {
  md: "min-h-12 px-6 py-3 text-base",
  sm: "min-h-11 px-5 py-2 text-[0.95rem]",
};

/**
 * `className` non deve ridefinire display, altezza o padding (le classi
 * Tailwind in conflitto non si sovrascrivono in base all'ordine): per
 * nascondere il pulsante avvolgerlo in un contenitore.
 */
export function buttonClass(
  variant: ButtonVariant = "primary",
  {
    full = false,
    size = "md",
    className = "",
  }: { full?: boolean; size?: keyof typeof sizes; className?: string } = {},
) {
  return `${base} ${sizes[size]} ${variants[variant]} ${full ? "w-full" : ""} ${className}`;
}

type ButtonLinkProps = {
  href: string;
  variant?: ButtonVariant;
  full?: boolean;
  external?: boolean;
  children: ReactNode;
} & Omit<ComponentProps<"a">, "href">;

/**
 * Link con aspetto da pulsante. I link interni passano da next/link,
 * quelli tel:, mailto: ed esterni restano <a> semplici.
 */
export function ButtonLink({
  href,
  variant = "primary",
  full,
  external,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  const classes = buttonClass(variant, { full, className });
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal && !external) {
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a
      href={href}
      className={classes}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
