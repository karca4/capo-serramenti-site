/**
 * Schema della configurazione di un sito.
 *
 * Il tema non contiene dati aziendali: tutto ciò che è specifico di
 * un'attività (identità, recapiti, testi, prodotti, SEO) arriva da un oggetto
 * `SiteConfig` esportato da `src/site/config.ts`.
 */

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface Link {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  /** Assente se la voce apre solo un sottomenu. */
  href?: string;
  newTab?: boolean;
  children?: NavItem[];
}

export interface Phone {
  label: string;
  /** Formato E.164, usato nei link tel: (es. "+390828831397"). */
  number: string;
  /** Formato leggibile mostrato a schermo (es. "+39 0828 831397"). */
  display: string;
  /** Se true il numero compare anche come contatto WhatsApp. */
  whatsapp?: boolean;
}

export interface Email {
  label: string;
  address: string;
}

export type SocialNetwork =
  "facebook" | "instagram" | "linkedin" | "youtube" | "tiktok" | "x";

export interface SocialProfile {
  network: SocialNetwork;
  url: string;
  label: string;
}

export interface Address {
  street: string;
  postalCode: string;
  city: string;
  /** Sigla della provincia (es. "SA"). */
  province: string;
  region: string;
  /** Codice ISO del paese (es. "IT"). */
  country: string;
  geo?: { lat: number; lng: number };
}

export interface PageSeo {
  title: string;
  description: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface Product {
  /** Usato nell'URL: /product-details/<id>. */
  id: string;
  title: string;
  /** Frase breve: card dei prodotti e apertura della pagina dettaglio. */
  summary: string;
  image?: string;
  /** Tag Cloudinary per filtrare la galleria su questo prodotto. */
  galleryTag?: string;
  /** Titolo e descrizione per Google; se mancano si usano title e summary. */
  seo?: PageSeo;
  /**
   * Testo della pagina dettaglio. Ogni pagina prodotto deve avere contenuti
   * propri: pagine quasi identiche non vengono indicizzate da Google.
   */
  description?: string[];
  benefits?: string[];
  /** Elenco di cosa si realizza (es. "Realizziamo": porte, cancelli...). */
  applications?: { title: string; items: string[] };
  faq?: Faq[];
}

export type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

/** Una fascia oraria valida per uno o più giorni (es. 08:00–13:00). */
export interface OpeningHours {
  days: DayOfWeek[];
  /** Formato 24h "HH:MM". */
  opens: string;
  closes: string;
}

/** Blocco di testo di un articolo del blog. */
export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] };

export interface BlogPost {
  /** Usato nell'URL: /blog/<slug>. */
  slug: string;
  title: string;
  /** Anteprima mostrata nelle card. */
  excerpt: string;
  image: string;
  tags: string[];
  /** Data di pubblicazione ISO (es. "2025-02-14"). */
  publishDate: string;
  /** Data dell'ultima modifica ISO, se diversa dalla pubblicazione. */
  updatedDate?: string;
  /** Titolo e descrizione per Google; se mancano si usano title ed excerpt. */
  seo?: PageSeo;
  content: ArticleBlock[];
  author?: { name: string; image?: string; role?: string };
}

export interface SectionIntro {
  eyebrow?: string;
  title: string;
  paragraph: string;
}

export interface CallToAction extends Link {
  variant: "primary" | "secondary";
}

/** Icone disponibili per i punti di forza (vedi components/common/FeatureIcon). */
export type FeatureIconName =
  | "ruler"
  | "badge"
  | "calculator"
  | "store"
  | "shield"
  | "leaf"
  | "home"
  | "wrench"
  | "clock"
  | "sparkles";

export interface Feature {
  icon: FeatureIconName;
  title: string;
  text: string;
}

export interface ProcessStep {
  title: string;
  text: string;
}

export interface AboutSection {
  id: string;
  title: string;
  paragraph: string;
  /** Due colonne di punti elenco. */
  highlights: [string[], string[]];
  image: ImageAsset;
}

export interface Partner {
  name: string;
  /** Sito del partner; se manca la card non è un link. */
  url?: string;
  /** Logo facoltativo: se manca si mostra il nome. */
  logo?: LogoImage;
  description?: string;
}

export interface LogoImage {
  src: string;
  width: number;
  height: number;
  /**
   * Versione per sfondi scuri (tema scuro, foto della hero), senza sfondo.
   * Facoltativa: se manca si usa sempre `src`.
   */
  light?: string;
}

export interface SiteConfig {
  /** Nome commerciale, usato in titoli, alt e testi. */
  name: string;
  /** Denominazione completa del titolare (footer, privacy). */
  legalName: string;
  vatNumber: string;
  /**
   * Per le società (art. 2250 c.c.): numero REA con la provincia
   * (es. "SA-123456") e capitale sociale versato (es. "10.000,00 € i.v.").
   * Se presenti compaiono nel footer e nella privacy.
   */
  rea?: string;
  shareCapital?: string;
  /**
   * true per le ditte individuali: il titolare è la persona indicata nella
   * denominazione, senza "legale rappresentante" (privacy).
   */
  soleProprietorship?: boolean;
  foundedYear: number;
  /** Tipo schema.org per i dati strutturati (es. "HomeAndConstructionBusiness"). */
  businessType: string;
  areaServed: string[];
  /** Frase sulla zona servita, mostrata in pagine prodotto e contatti. */
  serviceArea: string;
  /**
   * URL pubblico ufficiale, senza "/" finale (es. "https://www.esempio.it"):
   * usato per canonical, sitemap e dati strutturati.
   */
  url: string;
  /** Orari di apertura: footer, contatti e dati strutturati per Google. */
  openingHours?: OpeningHours[];
  locale: string;
  language: string;

  logo: {
    /** Logo esteso, usato nell'header e nel menu mobile. */
    full: LogoImage;
    /** Simbolo, usato nel footer. */
    mark: LogoImage;
  };
  icons: { favicon: string; apple: string };

  appearance: {
    defaultTheme: "light" | "dark" | "system";
  };

  contacts: {
    phones: Phone[];
    /** La prima email è quella principale (preventivi, footer). */
    emails: Email[];
    address: Address;
    map?: { embedUrl: string; directionsUrl: string };
  };
  social: SocialProfile[];

  navigation: NavItem[];
  footerLinks: Link[];

  seo: {
    defaultTitle: string;
    /** Deve contenere "%s", sostituito dal titolo della pagina. */
    titleTemplate: string;
    description: string;
    pages: {
      home: PageSeo;
      company: PageSeo;
      contact: PageSeo;
      gallery: PageSeo;
      blog: PageSeo;
      privacy: PageSeo;
    };
  };

  home: {
    hero: {
      eyebrow: string;
      title: string;
      subtitle: string;
      /** Facoltativa: senza foto la hero usa uno sfondo con i colori del brand. */
      image?: { desktop: string; mobile: string; alt: string };
      ctas: CallToAction[];
      highlights: { strong: string; text?: string }[];
    };
    products: SectionIntro;
    blog: SectionIntro;
    /** Facoltativo: punti di forza, mostrati subito dopo la hero. */
    features?: { intro: SectionIntro; items: Feature[] };
    /** Facoltativo: come lavoriamo, in passi numerati. */
    process?: { intro: SectionIntro; steps: ProcessStep[] };
    /** Facoltativo: anteprima delle ultime foto della galleria. */
    gallery?: { intro: SectionIntro; count: number };
  };

  /** Invito all'azione in fondo alla home e pulsante preventivo di header e menu. */
  cta: {
    title: string;
    text: string;
    /** Pulsante principale (di solito la pagina contatti/preventivo). */
    quote: Link;
  };

  pages: {
    company: { intro: string; sections: AboutSection[] };
    contact: {
      intro: string;
      about: { title: string; paragraphs: string[] };
      location: { title: string; text: string };
      quote: {
        title: string;
        paragraphs: string[];
        /** Frase attorno all'email principale: "<before> email <after>". */
        emailCta: { before: string; after: string };
      };
      box: { title: string; paragraphs: string[] };
    };
    gallery: { intro: string; text?: string[] };
    blog: { intro: string };
    privacy: { intro: string; lastUpdate: string; hostingProvider: string };
  };

  /** Facoltativo: aziende partner, mostrate in home prima dell'invito finale. */
  partners?: { intro: SectionIntro; items: Partner[] };

  products: Product[];
  blog: BlogPost[];

  gallery: {
    /** Cartella Cloudinary da cui leggere le foto. */
    cloudinaryFolder: string;
  };
}
