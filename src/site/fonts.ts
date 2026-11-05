import { Inter, Sora } from "next/font/google";

// Le variabili CSS --font-body e --font-heading sono quelle usate dal tema.

export const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const headingFont = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});
