import type { DayOfWeek, LogoImage, SiteConfig } from "@/theme/config/types";
import { yearsInBusiness } from "@/theme/lib/format";
import blog from "./blog";
import products from "./products";

// La ditta individuale è attiva dal 2017; l'esperienza parte dal 1993 con
// Tirrena Alluminio, di cui Capo Serramenti prosegue il lavoro.
const FOUNDED_YEAR = 2017;
const EXPERIENCE_SINCE = 1993;
const years = yearsInBusiness(EXPERIENCE_SINCE);
const WEEKDAYS: DayOfWeek[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const LOGO: LogoImage = {
  src: "/images/logo/logo-esteso.svg",
  light: "/images/logo/logo-esteso-chiaro.svg",
  width: 618,
  height: 222,
};

const siteConfig: SiteConfig = {
  name: "Capo Serramenti",
  legalName: "Capo Serramenti di Valentino Capo",
  vatNumber: "05563010650",
  soleProprietorship: true,
  foundedYear: FOUNDED_YEAR,
  businessType: "HomeAndConstructionBusiness",
  areaServed: [
    "Capaccio Paestum",
    "Agropoli",
    "Eboli",
    "Battipaglia",
    "Piana del Sele",
    "Cilento",
    "Provincia di Salerno",
    "Italia",
  ],
  serviceArea:
    "Operiamo a Capaccio Paestum, Agropoli, Eboli, Battipaglia, nella Piana del Sele e nel Cilento, in tutta la provincia di Salerno e, su richiesta, nel resto d’Italia.",
  url: "https://www.caposerramenti.it",
  openingHours: [
    { days: WEEKDAYS, opens: "08:00", closes: "13:00" },
    { days: WEEKDAYS, opens: "14:00", closes: "17:00" },
  ],
  locale: "it_IT",
  language: "it",

  // Il simbolo da solo è verticale e poco leggibile in piccolo: anche nel
  // footer si usa il logo esteso.
  logo: { full: LOGO, mark: LOGO },
  icons: { favicon: "/favicon.ico", apple: "/apple-icon.png" },

  appearance: { defaultTheme: "light" },

  contacts: {
    phones: [
      {
        label: "Sede operativa",
        number: "+390828722054",
        display: "+39 0828 722054",
      },
      {
        label: "Cellulare",
        number: "+393383328269",
        display: "+39 338 3328269",
        whatsapp: true,
      },
    ],
    emails: [
      { label: "Email", address: "caposerramenti@gmail.com" },
      { label: "PEC", address: "valentinocapo@pec.it" },
    ],
    address: {
      street: "Via Ponte Marmoreo 28",
      postalCode: "84047",
      city: "Capaccio Paestum",
      province: "SA",
      region: "Campania",
      country: "IT",
    },
    map: {
      embedUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41822.8037794231!2d15.000045849029387!3d40.43288685940191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bfd7d14a7f02b%3A0xdec7c3a2c8d1b32c!2sCapo%20Serramenti%20di%20Valentino%20Capo.%20Infissi%20in%20alluminio%2C%20pvc%2C%20ferro.!5e1!3m2!1sit!2sit!4v1767871600352!5m2!1sit!2sit",
      directionsUrl:
        "https://www.google.com/maps/search/?api=1&query=Capo+Serramenti+di+Valentino+Capo+Capaccio+Paestum",
    },
  },
  social: [
    {
      network: "facebook",
      label: "Facebook",
      url: "https://www.facebook.com/CapoSerramenti",
    },
    {
      network: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/caposerramenti",
    },
  ],

  navigation: [
    { label: "Chi siamo", href: "/company" },
    {
      label: "Prodotti",
      children: products.map((p) => ({
        label: p.title,
        href: `/product-details/${p.id}`,
      })),
    },
    { label: "Galleria", href: "/gallery" },
    { label: "News", href: "/blog" },
    { label: "Contatti", href: "/contact" },
  ],
  footerLinks: [
    { label: "Chi siamo", href: "/company" },
    { label: "Prodotti", href: "/#prodotti" },
    { label: "Galleria", href: "/gallery" },
    { label: "News", href: "/blog" },
    { label: "Contatti", href: "/contact" },
    { label: "Privacy e cookie", href: "/privacy" },
  ],

  seo: {
    defaultTitle:
      "Capo Serramenti | Infissi e serramenti su misura a Capaccio Paestum",
    titleTemplate: "%s | Capo Serramenti",
    description:
      "Capo Serramenti: infissi in alluminio e PVC, persiane, zanzariere, blindati e lavorazioni in ferro su misura a Capaccio Paestum, Agropoli e in provincia di Salerno.",
    pages: {
      home: {
        title:
          "Infissi e serramenti su misura a Capaccio Paestum | Capo Serramenti",
        description: `Infissi in alluminio e PVC, persiane, zanzariere e blindati su misura a Capaccio Paestum, Agropoli e provincia di Salerno. Oltre ${years} anni di esperienza, preventivi gratuiti.`,
      },
      company: {
        title: "Chi siamo: serramenti su misura a Capaccio Paestum",
        description: `Capo Serramenti prosegue dal 2017 un’esperienza nata nel 1993 nella lavorazione di alluminio e ferro. Serramenti su misura e qualità artigianale a Capaccio Paestum.`,
      },
      contact: {
        title: "Contatti, sede e showroom a Capaccio Paestum",
        description:
          "Contatta Capo Serramenti a Capaccio Paestum (SA) per preventivi gratuiti su serramenti, infissi, zanzariere e strutture su misura. Telefono, WhatsApp ed email.",
      },
      gallery: {
        title:
          "Lavori realizzati: serramenti su misura in provincia di Salerno",
        description:
          "La galleria dei lavori di Capo Serramenti: infissi, serramenti e strutture in alluminio e ferro realizzati su misura a Capaccio Paestum e in provincia di Salerno.",
      },
      blog: {
        title: "News e consigli su serramenti, infissi e zanzariere",
        description:
          "Novità, guide e consigli di Capo Serramenti su infissi in alluminio e PVC, zanzariere e risparmio energetico, da Capaccio Paestum.",
      },
      privacy: {
        title: "Privacy e cookie policy",
        description:
          "Informativa sul trattamento dei dati personali e sull'uso dei cookie del sito Capo Serramenti.",
      },
    },
  },

  home: {
    hero: {
      eyebrow: `Capaccio Paestum (SA) · Oltre ${years} anni di esperienza`,
      title: "Serramenti e infissi su misura, la soluzione per la tua casa",
      subtitle:
        "Infissi in alluminio e PVC, persiane, zanzariere, blindati e lavorazioni in ferro: progettiamo, realizziamo e installiamo per abitazioni e attività commerciali a Capaccio Paestum e in provincia di Salerno.",
      // Foto della hero da aggiungere: per ora sfondo con i colori del brand.
      ctas: [
        {
          label: "Scopri i nostri lavori",
          href: "/gallery",
          variant: "primary",
        },
        {
          label: "Richiedi un preventivo",
          href: "/contact",
          variant: "secondary",
        },
      ],
      highlights: [
        { strong: `Oltre ${years} anni`, text: "di esperienza" },
        { strong: "Alluminio, PVC e ferro", text: "lavorati su misura" },
        { strong: "Preventivi gratuiti", text: "e sopralluoghi" },
      ],
    },
    products: {
      eyebrow: "Cosa realizziamo",
      title: "I nostri prodotti",
      paragraph:
        "Serramenti, infissi, zanzariere e strutture su misura in alluminio, PVC e ferro, realizzati con cura artigianale e pensati per durare nel tempo.",
    },
    blog: {
      eyebrow: "Consigli e novità",
      title: "Dal nostro blog",
      paragraph:
        "Guide e approfondimenti per scegliere i serramenti giusti per la tua casa.",
    },
    features: {
      intro: {
        eyebrow: "Perché sceglierci",
        title: "Tradizione artigiana, dal progetto alla posa",
        paragraph:
          "Seguiamo personalmente ogni lavoro, dalla progettazione all’installazione e alla manutenzione.",
      },
      items: [
        {
          icon: "ruler",
          title: "Su misura",
          text: "Ogni serramento è progettato sulle misure e sulle esigenze del tuo ambiente.",
        },
        {
          icon: "wrench",
          title: "Lavorazione artigianale",
          text: `Oltre ${years} anni di esperienza nella lavorazione di alluminio e ferro.`,
        },
        {
          icon: "calculator",
          title: "Preventivo gratuito",
          text: "Sopralluogo e preventivo chiaro, senza impegno.",
        },
        {
          icon: "store",
          title: "Showroom a Capaccio Paestum",
          text: "Vieni a vedere da vicino materiali, finiture e soluzioni.",
        },
      ],
    },
    process: {
      intro: {
        eyebrow: "Come lavoriamo",
        title: "Dal primo contatto all'installazione",
        paragraph: "Un percorso semplice, con un unico referente.",
      },
      steps: [
        {
          title: "Raccontaci il progetto",
          text: "Chiamaci, scrivici su WhatsApp o via email: ci bastano poche informazioni per iniziare.",
        },
        {
          title: "Sopralluogo e consulenza",
          text: "Prendiamo le misure e ti aiutiamo a scegliere materiali e finiture, anche in showroom.",
        },
        {
          title: "Preventivo gratuito",
          text: "Ricevi un'offerta dettagliata e senza impegno.",
        },
        {
          title: "Realizzazione e posa",
          text: "Realizziamo e installiamo i tuoi serramenti, e restiamo a disposizione per l'assistenza.",
        },
      ],
    },
    gallery: {
      intro: {
        eyebrow: "I nostri lavori",
        title: "Progetti realizzati",
        paragraph:
          "Alcune delle installazioni più recenti tra Paestum, Agropoli, la Piana del Sele e il Cilento.",
      },
      count: 6,
    },
  },

  cta: {
    title: "Pronto a rinnovare i tuoi infissi?",
    text: "Contattaci per un sopralluogo o un preventivo gratuito e senza impegno.",
    quote: { label: "Richiedi un preventivo", href: "/contact" },
  },

  partners: {
    intro: {
      eyebrow: "Collaborazioni",
      title: "I nostri partner",
      paragraph:
        "Lavoriamo con aziende qualificate del settore per offrirti materiali e sistemi affidabili.",
    },
    items: [
      {
        name: "Plastic House",
        url: "https://www.plastichouse.it",
        logo: {
          src: "/images/partners/plastic-house.svg",
          light: "/images/partners/plastic-house-chiaro.svg",
          width: 770,
          height: 362,
        },
        description: "Serramenti in PVC e sistemi oscuranti, Trentinara (SA).",
      },
      {
        name: "COLMA",
        description: "Sistemi per infissi di qualità.",
      },
    ],
  },

  pages: {
    company: {
      intro:
        "Artigiani per passione, professionisti per scelta: la storia, la mission e la vision di Capo Serramenti.",
      sections: [
        {
          id: "company-history",
          title: "La nostra storia",
          paragraph:
            "Capo Serramenti nasce a Capaccio Paestum (SA) nel gennaio 2017, dall’esperienza e dalla passione di Valentino Capo per la lavorazione dell’alluminio e del ferro. Il percorso inizia nel 1993 con Tirrena Alluminio, realtà che negli anni si è affermata sul territorio per la qualità dei prodotti e dei servizi offerti. Dopo lo scioglimento della società, Valentino Capo decide di proseguire il lavoro intrapreso dando vita a Capo Serramenti: un’azienda che unisce tradizione artigiana e innovazione, cresciuta grazie alla fiducia dei clienti e a un costante impegno verso la qualità.",
          highlights: [
            [
              "Dal 1993 nella lavorazione di alluminio e ferro",
              "Sede e showroom a Capaccio Paestum (SA)",
              "Un unico referente, dal progetto alla posa",
            ],
            [
              "Clienti tra Paestum, Agropoli, Eboli e Battipaglia",
              "Abitazioni e attività commerciali",
              "Interventi anche fuori regione",
            ],
          ],
          image: {
            src: "/images/products/alluminio.jpg",
            alt: "Serramenti in alluminio realizzati da Capo Serramenti",
          },
        },
        {
          id: "company-mission",
          title: "La nostra mission",
          paragraph:
            "Offrire serramenti, infissi e soluzioni su misura che uniscano funzionalità, sicurezza ed estetica, rispondendo in modo concreto alle esigenze di ogni cliente. Seguiamo personalmente ogni progetto in tutte le sue fasi: dalla progettazione alla realizzazione artigianale, fino all’installazione e alla manutenzione. L’esperienza, l’abilità manuale e la creatività ci permettono di realizzare prodotti unici, curati nei dettagli e pensati per durare nel tempo.",
          highlights: [
            [
              "Sopralluogo e misure prese da noi",
              "Soluzioni su misura per ogni ambiente",
              "Preventivo gratuito e senza impegno",
            ],
            [
              "Realizzazione artigianale",
              "Installazione curata nei dettagli",
              "Assistenza e manutenzione nel tempo",
            ],
          ],
          image: {
            src: "/images/products/pvc.jpg",
            alt: "Infissi su misura installati da Capo Serramenti",
          },
        },
        {
          id: "company-vision",
          title: "La nostra vision",
          paragraph:
            "Guardiamo al futuro mantenendo salde le nostre radici artigiane. Vogliamo essere un punto di riferimento per chi cerca qualità, affidabilità e soluzioni personalizzate nel settore dei serramenti. Per questo investiamo in materiali innovativi, tecnologie moderne e collaborazioni con partner qualificati, con un obiettivo: migliorare il comfort della casa e valorizzare ogni spazio, senza perdere ciò che ci distingue, la passione per il dettaglio e l’attenzione verso il cliente.",
          highlights: [
            [
              "Più isolamento, meno consumi",
              "Comfort in casa in ogni stagione",
              "Materiali di qualità e duraturi",
            ],
            [
              "Partner qualificati del settore",
              "Tecnologie moderne",
              "Affidabilità nel tempo",
            ],
          ],
          image: {
            src: "/images/products/interni.jpg",
            alt: "Opere per interni realizzate da Capo Serramenti",
          },
        },
      ],
    },
    contact: {
      intro: "Un contatto diretto, una soluzione su misura",
      about: {
        title: "Sede e showroom",
        paragraphs: [
          "Capo Serramenti ti aspetta nella sua sede operativa e showroom a Capaccio Paestum (SA), il luogo ideale per toccare con mano la qualità dei nostri serramenti, infissi e zanzariere su misura.",
          "In showroom puoi vedere da vicino infissi e serramenti, valutare materiali, finiture e soluzioni tecniche e ricevere una consulenza diretta. Siamo a disposizione per sopralluoghi e preventivi gratuiti, e ti accompagniamo in ogni fase del progetto, dalla scelta dei materiali alla posa.",
          "Lo showroom è facilmente raggiungibile da Agropoli, Eboli, Battipaglia, dalla Piana del Sele e da tutto il Cilento. Oltre alle nuove installazioni ci occupiamo di assistenza e riparazioni di zanzariere, persiane e tapparelle, anche se non installate da noi.",
        ],
      },
      location: {
        title: "Dove siamo",
        text: "La sede di Capo Serramenti si trova in",
      },
      quote: {
        title: "Scrivici per un preventivo gratuito",
        paragraphs: [
          "Che tu stia ristrutturando casa o progettando una nuova installazione, Capo Serramenti è il partner giusto per soluzioni affidabili, durature e personalizzate.",
        ],
        emailCta: {
          before: "Scrivi una mail all’indirizzo",
          after: "per richiedere un preventivo gratuito e senza impegno.",
        },
      },
      box: {
        title: "Contatti diretti",
        paragraphs: [
          "Per informazioni, consulenze o preventivi gratuiti puoi contattarci direttamente attraverso i nostri recapiti ufficiali.",
          "Siamo sempre disponibili per rispondere alle tue esigenze e accompagnarti nella scelta della soluzione più adatta.",
        ],
      },
    },
    gallery: {
      intro: "Il nostro lavoro, sotto i tuoi occhi.",
      text: [
        "In questa pagina raccogliamo alcuni dei lavori realizzati da Capo Serramenti: infissi in alluminio e PVC, persiane e tapparelle, zanzariere, porte blindate, lavorazioni in ferro, tende da sole e opere per interni, installati in abitazioni e attività commerciali soprattutto a Capaccio Paestum, Agropoli, Eboli, Battipaglia e nel Cilento.",
        "Ogni progetto nasce da esigenze diverse: isolare meglio la casa, aumentarne la sicurezza o rinnovarne l’aspetto. Se un lavoro ti ispira, contattaci: valutiamo insieme la soluzione più adatta, con un preventivo gratuito e senza impegno.",
      ],
    },
    blog: {
      intro:
        "Novità, consigli e approfondimenti su serramenti, infissi e zanzariere su misura.",
    },
    privacy: {
      intro:
        "Come trattiamo i tuoi dati personali e quali strumenti utilizza questo sito.",
      lastUpdate: "5 novembre 2026",
      hostingProvider: "Vercel Inc. (USA)",
    },
  },

  products,
  blog,

  gallery: { cloudinaryFolder: "CAPOSERRAMENTI" },
};

export default siteConfig;
