"use client";

import { ThemeProvider } from "next-themes";

export function Providers({
  children,
  defaultTheme,
}: {
  children: React.ReactNode;
  defaultTheme: "light" | "dark" | "system";
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme={defaultTheme}
      enableSystem={defaultTheme === "system"}
    >
      {children}
    </ThemeProvider>
  );
}
