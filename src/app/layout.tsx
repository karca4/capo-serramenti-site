import Footer from "@/theme/components/layout/Footer";
import Header from "@/theme/components/layout/Header";
import { Providers } from "@/theme/components/layout/Providers";
import ScrollToTop from "@/theme/components/layout/ScrollToTop";
import { whatsappUrl } from "@/theme/components/common/SocialIcon";
import { bodyFont, headingFont, site } from "@/theme/config/site";
import {
  jsonLdScript,
  localBusinessJsonLd,
  rootMetadata,
} from "@/theme/lib/seo";
import "./globals.css";

export const metadata = rootMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const phone = site.contacts.phones[0];
  const whatsapp = site.contacts.phones.find((p) => p.whatsapp);
  const whatsappLink = whatsapp ? whatsappUrl(whatsapp.number) : undefined;

  return (
    <html
      suppressHydrationWarning
      lang={site.language}
      className={`${bodyFont.variable} ${headingFont.variable}`}
    >
      <body className="dark:bg-black bg-white text-black">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLdScript(localBusinessJsonLd()),
          }}
        />
        <Providers defaultTheme={site.appearance.defaultTheme}>
          <div className="isolate">
            <Header
              navigation={site.navigation}
              logo={site.logo.full}
              siteName={site.name}
              phone={phone}
              whatsappUrl={whatsappLink}
              quote={site.cta.quote}
            />
            <main>{children}</main>
            <Footer />
          </div>
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
