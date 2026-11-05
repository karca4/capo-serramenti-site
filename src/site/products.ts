import type { Product } from "@/theme/config/types";

// Testi ripresi dal sito precedente e riorganizzati per la pagina dettaglio.
// Generici di proposito: niente marche, certificazioni o garanzie specifiche.
const products: Product[] = [
  {
    id: "alluminio",
    title: "Lavorazioni in alluminio",
    summary:
      "Infissi, porte, persiane e vetrine in alluminio su misura, anche a taglio termico e in legno-alluminio: leggeri, resistenti e inalterabili nel tempo.",
    image: "/images/products/alluminio.jpg",
    seo: {
      title: "Infissi e serramenti in alluminio su misura a Capaccio Paestum",
      description:
        "Infissi, porte, persiane e vetrine in alluminio su misura, anche a taglio termico e legno-alluminio. Capo Serramenti, Capaccio Paestum e provincia di Salerno.",
    },
    description: [
      "La lavorazione dell’alluminio è il cuore storico di Capo Serramenti: un mestiere che portiamo avanti dal 1993. Leggerezza, resistenza e inalterabilità nel tempo fanno dell’alluminio uno dei materiali più versatili per serramenti e infissi di qualità.",
      "Progettiamo e realizziamo ogni lavorazione su misura, unendo tradizione artigiana e tecnologie moderne, con particolare attenzione a isolamento, funzionalità e design.",
      "Per chi cerca il massimo comfort proponiamo l’alluminio a taglio termico, che garantisce un elevato isolamento termico e acustico, e il legno-alluminio, che unisce il calore del legno all’interno con la resistenza dell’alluminio all’esterno.",
    ],
    applications: {
      title: "Cosa realizziamo in alluminio",
      items: [
        "Infissi e finestre",
        "Porte e portoni d’ingresso",
        "Porte per uscite di sicurezza",
        "Persiane e veneziane",
        "Tapparelle avvolgibili e cassonetti",
        "Zanzariere su misura",
        "Vetrine per negozi",
        "Verande e chiusure per esterni",
      ],
    },
    benefits: [
      "Leggero, resistente e inalterabile nel tempo",
      "Taglio termico per isolamento termico e acustico",
      "Legno-alluminio: calore del legno, resistenza del metallo",
      "Profili sottili, adatti anche a grandi vetrate",
      "Manutenzione minima",
      "Ogni lavorazione è su misura",
    ],
    faq: [
      {
        question:
          "Che differenza c’è tra alluminio normale e a taglio termico?",
        answer:
          "Nei profili a taglio termico una barriera isolante separa la parte interna da quella esterna e riduce le dispersioni di calore. È la soluzione indicata per finestre e porte-finestre delle abitazioni; l’alluminio normale resta adatto per persiane, chiusure e ambienti non riscaldati.",
      },
      {
        question: "Realizzate anche vetrine e porte per negozi?",
        answer:
          "Sì, realizziamo vetrine, porte d’ingresso e uscite di sicurezza per attività commerciali, progettate sulle misure e sulle esigenze del locale.",
      },
      {
        question: "Quanto tempo serve per realizzare un serramento su misura?",
        answer:
          "Dipende dal tipo di lavorazione e dalla quantità. Dopo il sopralluogo e la scelta dei materiali ti indichiamo tempi di realizzazione e posa nel preventivo.",
      },
    ],
  },
  {
    id: "pvc",
    title: "Infissi in PVC",
    summary:
      "Infissi in PVC su misura ad alta efficienza energetica: ottimo isolamento termico e acustico, manutenzione minima e un ottimo rapporto qualità-prezzo.",
    image: "/images/products/pvc.jpg",
    seo: {
      title: "Infissi in PVC su misura a Capaccio Paestum e Salerno",
      description:
        "Infissi e finestre in PVC su misura: isolamento termico e acustico, manutenzione minima e preventivo gratuito. Capo Serramenti, Capaccio Paestum (SA).",
    },
    description: [
      "Da anni proponiamo soluzioni in PVC di alto livello, in collaborazione con partner qualificati e selezionati del settore. L’esperienza maturata ci permette di offrire infissi in PVC su misura affidabili e adatti a ogni contesto, abitativo o commerciale.",
      "Il PVC è sempre più scelto per le sue proprietà isolanti e la sua versatilità estetica: riduce le dispersioni di calore, attenua i rumori esterni e non teme umidità e agenti atmosferici, senza bisogno di verniciature.",
      "Seguiamo ogni progetto con attenzione, dalla consulenza iniziale all’installazione, per proporti il serramento più adatto in termini di comfort, estetica e risparmio energetico.",
    ],
    benefits: [
      "Ottimo isolamento termico, per una casa più efficiente",
      "Isolamento acustico e maggiore comfort",
      "Resistenza agli agenti atmosferici",
      "Inalterabile nel tempo, manutenzione minima",
      "Design moderno e personalizzabile",
      "Ottimo rapporto qualità-prezzo",
    ],
    faq: [
      {
        question: "Meglio il PVC o l’alluminio a taglio termico?",
        answer:
          "Entrambi garantiscono un buon isolamento. Il PVC ha un ottimo rapporto qualità-prezzo e richiede pochissima manutenzione; l’alluminio permette profili più sottili e grandi vetrate. Ti aiutiamo a scegliere in base alla casa e al budget.",
      },
      {
        question: "Conviene sostituire i vecchi infissi?",
        answer:
          "Se i serramenti attuali hanno spifferi, condensa o vetri singoli, la sostituzione migliora nettamente comfort e consumi. Valutiamo insieme lo stato degli infissi esistenti durante il sopralluogo.",
      },
      {
        question: "Posso accedere alle detrazioni fiscali?",
        answer:
          "Dipende dal tipo di intervento e dalle norme in vigore al momento dei lavori. In fase di preventivo verifichiamo con te se la sostituzione degli infissi può rientrare nelle agevolazioni previste.",
      },
    ],
  },
  {
    id: "persiane",
    title: "Persiane e tapparelle",
    summary:
      "Persiane e tapparelle su misura in alluminio e PVC, con cassonetti e veneziane: oscuramento, protezione e sicurezza. Ripariamo anche quelle esistenti.",
    image: "/images/products/alluminio.jpg",
    seo: {
      title: "Persiane e tapparelle in alluminio e PVC a Capaccio Paestum",
      description:
        "Persiane e tapparelle su misura in alluminio e PVC, cassonetti e veneziane, con riparazione e sostituzione. Capo Serramenti, Capaccio Paestum e provincia di Salerno.",
    },
    description: [
      "Persiane e tapparelle completano il serramento: regolano luce e privacy, proteggono la finestra dagli agenti atmosferici e aumentano la sicurezza della casa. Le realizziamo su misura in alluminio e in PVC, abbinate per colore e finitura agli infissi.",
      "L’alluminio è robusto e dura a lungo; il PVC è leggero, isolante e non richiede verniciature. Ti aiutiamo a scegliere il materiale più adatto alla facciata, all’esposizione e al budget.",
      "Ci occupiamo anche di riparazioni: sostituzione di stecche, cinghie e rulli e sistemazione di persiane che non chiudono bene, anche se non le abbiamo installate noi.",
    ],
    applications: {
      title: "Cosa realizziamo",
      items: [
        "Persiane in alluminio",
        "Persiane in PVC",
        "Tapparelle avvolgibili in alluminio e PVC",
        "Cassonetti",
        "Veneziane",
        "Riparazione e sostituzione di persiane e tapparelle",
      ],
    },
    benefits: [
      "Su misura, abbinate agli infissi",
      "Alluminio o PVC, in base alle esigenze",
      "Oscuramento e privacy",
      "Più protezione e sicurezza per le finestre",
      "Riparazioni anche su impianti esistenti",
    ],
    faq: [
      {
        question: "Meglio persiane in alluminio o in PVC?",
        answer:
          "L’alluminio è più robusto e adatto anche a grandi dimensioni e a zone molto esposte; il PVC è leggero, economico e non va mai verniciato. Durante il sopralluogo valutiamo insieme la soluzione più adatta.",
      },
      {
        question: "Riparate anche tapparelle e persiane non installate da voi?",
        answer:
          "Sì, interveniamo anche su tapparelle e persiane esistenti: sostituiamo stecche, cinghie e rulli o, se conviene di più, l’intero avvolgibile. Contattaci e descrivici il problema.",
      },
    ],
  },
  {
    id: "zanzariere",
    title: "Zanzariere",
    summary:
      "Zanzariere su misura avvolgibili, scorrevoli, a battente e plissettate, con riparazione di quelle esistenti: protezione dagli insetti senza rinunciare ad aria e luce.",
    image: "/images/products/zanzariere.jpg",
    seo: {
      title: "Zanzariere su misura e riparazioni a Capaccio Paestum",
      description:
        "Zanzariere su misura avvolgibili, scorrevoli, a battente e plissettate, riparazione e sostituzione di zanzariere esistenti. Capo Serramenti, Capaccio Paestum (SA).",
    },
    description: [
      "Le zanzariere su misura sono la soluzione ideale per proteggere casa o attività commerciale dagli insetti, migliorando al tempo stesso il comfort degli ambienti: puoi tenere le finestre aperte e far circolare l’aria in tutta tranquillità.",
      "Grazie all’esperienza nel settore dei serramenti, realizziamo zanzariere personalizzate che si integrano con finestre, porte e infissi esistenti, pratiche da usare, resistenti e dall’estetica discreta.",
      "Ogni zanzariera viene realizzata sulle misure del vano e installata con precisione, per un funzionamento affidabile e duraturo.",
      "Ripariamo anche le zanzariere esistenti, pure se non installate da noi: sostituzione della rete, delle molle e delle guide, oppure dell’intera zanzariera quando la riparazione non conviene.",
    ],
    applications: {
      title: "Tipologie di zanzariere",
      items: [
        "Zanzariere avvolgibili",
        "Zanzariere scorrevoli",
        "Zanzariere a battente",
        "Zanzariere plissettate",
        "Per finestre e porte-finestre",
        "Per balconi, verande e grandi aperture",
        "Riparazione e sostituzione di zanzariere esistenti",
      ],
    },
    benefits: [
      "Protezione efficace da zanzare e insetti",
      "Migliore ventilazione naturale degli ambienti",
      "Strutture resistenti e materiali di qualità",
      "Facili da usare e da pulire",
      "Design discreto e personalizzabile",
    ],
    faq: [
      {
        question: "Quale zanzariera scegliere per una porta-finestra?",
        answer:
          "Per le porte-finestre sono molto pratiche le plissettate e le scorrevoli, che hanno una guida a terra ribassata e non intralciano il passaggio. Durante il sopralluogo ti consigliamo il modello più adatto al vano.",
      },
      {
        question: "Si possono montare sugli infissi esistenti?",
        answer:
          "Sì, le zanzariere vengono realizzate su misura e si adattano alla maggior parte degli infissi già installati, senza bisogno di sostituirli.",
      },
      {
        question: "Riparate anche zanzariere non installate da voi?",
        answer:
          "Sì, ripariamo zanzariere di qualsiasi tipo: sostituiamo rete, molle, guide e accessori o, se conviene, l’intera zanzariera. Contattaci e descrivici il problema.",
      },
    ],
  },
  {
    id: "ferro",
    title: "Lavorazioni in ferro",
    summary:
      "Serramenti, cancelli, grate e strutture in ferro di piccole e medie dimensioni, realizzati su misura con esperienza trentennale.",
    image: "/images/products/ferro.jpg",
    seo: {
      title: "Fabbro e lavorazioni in ferro su misura a Capaccio Paestum",
      description:
        "Fabbro a Capaccio Paestum: cancelli, grate, serramenti e strutture in ferro su misura per abitazioni e attività. Capo Serramenti, provincia di Salerno.",
    },
    description: [
      "La lavorazione del ferro è una delle competenze storiche di Capo Serramenti, maturata in oltre trent’anni di esperienza nel settore dei serramenti e delle strutture metalliche: un sapere artigiano che si traduce in realizzazioni solide, funzionali e curate nei dettagli.",
      "Nel nostro laboratorio di fabbro realizziamo lavorazioni in ferro su misura per contesti residenziali e commerciali, con particolare attenzione alle strutture di piccole e medie dimensioni, sempre progettate sulle esigenze del cliente.",
      "Ogni progetto nasce dall’ascolto del cliente e viene realizzato con cura artigianale, per offrire soluzioni robuste e destinate a durare nel tempo.",
    ],
    applications: {
      title: "Cosa realizziamo in ferro",
      items: [
        "Serramenti e infissi in ferro",
        "Porte e cancelli",
        "Grate e protezioni",
        "Strutture metalliche di piccole e medie dimensioni",
        "Elementi su misura per interni ed esterni",
      ],
    },
    benefits: [
      "Elevata resistenza e solidità",
      "Lunga durata nel tempo",
      "Versatilità progettuale",
      "Sicurezza e affidabilità",
      "Adatto a contesti classici e moderni",
    ],
    faq: [
      {
        question: "Realizzate grate di sicurezza per finestre?",
        answer:
          "Sì, progettiamo grate e protezioni su misura per finestre, porte e vani, scegliendo con te disegno e finitura più adatti alla facciata.",
      },
      {
        question: "Il ferro va trattato contro la ruggine?",
        answer:
          "Le lavorazioni per esterni vengono protette con trattamenti e verniciature adatte. Ti spieghiamo come mantenerle nel tempo in base all’esposizione.",
      },
    ],
  },
  {
    id: "blindati",
    title: "Porte e infissi blindati",
    summary:
      "Porte e infissi blindati su misura per abitazioni, uffici e attività commerciali: più sicurezza, senza rinunciare a design e isolamento.",
    image: "/images/products/blindati.jpg",
    seo: {
      title: "Porte blindate e infissi blindati a Capaccio Paestum",
      description:
        "Porte blindate e infissi blindati su misura per case, uffici e negozi: sicurezza, isolamento e design. Capo Serramenti, Capaccio Paestum (SA).",
    },
    description: [
      "I serramenti blindati sono la scelta ideale per chi vuole aumentare la sicurezza senza rinunciare a design e funzionalità. Progettiamo e realizziamo porte e infissi blindati su misura, studiati per integrarsi in qualsiasi contesto architettonico.",
      "Grazie all’esperienza nei serramenti e nelle lavorazioni metalliche, offriamo soluzioni blindate affidabili, realizzate con materiali certificati e tecnologie moderne, per una tranquillità quotidiana che dura nel tempo.",
      "Valutiamo insieme il livello di protezione più adatto alla casa o all’attività, anche negli interventi di ristrutturazione.",
    ],
    applications: {
      title: "Soluzioni blindate",
      items: [
        "Porte blindate per abitazioni e uffici",
        "Infissi blindati su misura",
        "Soluzioni per attività commerciali",
        "Serramenti blindati per ristrutturazioni",
        "Progetti su misura per ogni esigenza di sicurezza",
      ],
    },
    benefits: [
      "Elevato livello di sicurezza",
      "Strutture robuste e resistenti",
      "Isolamento termico e acustico",
      "Personalizzazione completa",
      "Design funzionale ed elegante",
    ],
    faq: [
      {
        question: "Come scelgo la classe di sicurezza di una porta blindata?",
        answer:
          "Dipende dal tipo di immobile, dal piano e dall’esposizione. Durante il sopralluogo ti consigliamo il livello di protezione più adatto e ti spieghiamo le differenze.",
      },
      {
        question: "Una porta blindata isola anche dal freddo e dai rumori?",
        answer:
          "Sì, le porte blindate moderne possono garantire un buon isolamento termico e acustico. Ne parliamo insieme in base alle tue esigenze.",
      },
    ],
  },
  {
    id: "tende",
    title: "Strutture e tende da sole",
    summary:
      "Gazebo e tende da sole su misura per giardini, terrazzi, balconi e attività commerciali: ombra, protezione e spazi esterni più vivibili.",
    image: "/images/products/tende.jpg",
    seo: {
      title: "Tende da sole e gazebo su misura a Capaccio Paestum",
      description:
        "Tende da sole e gazebo su misura per balconi, terrazzi, giardini e locali: protezione dal sole e design. Capo Serramenti, Capaccio Paestum (SA).",
    },
    description: [
      "Gazebo e tende da sole permettono di vivere al meglio gli spazi esterni, proteggendoli dal sole e dagli agenti atmosferici. Progettiamo e realizziamo strutture su misura pensate per integrarsi armoniosamente con l’ambiente.",
      "Grazie all’esperienza nei serramenti e nelle strutture metalliche, proponiamo soluzioni personalizzate realizzate con materiali resistenti e sistemi affidabili, per comfort e funzionalità che durano nel tempo.",
      "Sono ideali sia per la casa sia per bar, ristoranti e attività commerciali che vogliono valorizzare i propri spazi all’aperto.",
    ],
    applications: {
      title: "Cosa realizziamo",
      items: [
        "Gazebo su misura per giardini e terrazzi",
        "Tende da sole per balconi e porticati",
        "Soluzioni per attività commerciali",
        "Strutture per spazi outdoor residenziali",
      ],
    },
    benefits: [
      "Protezione dal sole e dalle intemperie",
      "Spazi esterni più vivibili e valorizzati",
      "Materiali resistenti e durevoli",
      "Personalizzazione completa",
      "Design funzionale ed elegante",
    ],
    faq: [
      {
        question: "Serve un permesso per installare un gazebo o una tenda?",
        answer:
          "Dipende dal tipo di struttura e dai regolamenti del comune. In fase di preventivo ti indichiamo cosa verificare prima dell’installazione.",
      },
      {
        question: "Realizzate strutture per bar e ristoranti?",
        answer:
          "Sì, progettiamo tende e strutture per dehors e spazi esterni di attività commerciali, su misura per lo spazio disponibile.",
      },
    ],
  },
  {
    id: "interni",
    title: "Opere per interni",
    summary:
      "Scale interne, porte interne e box doccia su misura: soluzioni curate nei dettagli per valorizzare gli spazi della casa.",
    image: "/images/products/interni.jpg",
    seo: {
      title: "Scale interne, porte e box doccia su misura a Capaccio Paestum",
      description:
        "Scale interne, porte interne e box doccia su misura, con cura artigianale. Capo Serramenti, Capaccio Paestum e provincia di Salerno.",
    },
    description: [
      "Le nostre opere per interni nascono per valorizzare gli spazi abitativi con soluzioni su misura, curate nei minimi dettagli. Ogni progetto è studiato per integrarsi con lo stile dell’ambiente, unendo comfort, praticità ed estetica.",
      "Grazie all’esperienza nella lavorazione di alluminio, ferro e materiali innovativi, realizziamo scale interne, porte interne e box doccia su misura, solidi, funzionali e pensati per durare nel tempo.",
      "Ci occupiamo sia di ristrutturazioni sia di nuove costruzioni, seguendo il progetto dalle misure alla posa.",
    ],
    applications: {
      title: "Cosa realizziamo",
      items: [
        "Scale interne in metallo e materiali combinati",
        "Porte interne personalizzate",
        "Box doccia su misura",
        "Progetti per ristrutturazioni e nuove costruzioni",
      ],
    },
    benefits: [
      "Progettazione su misura",
      "Spazi interni ottimizzati",
      "Materiali di qualità",
      "Funzionalità e comfort",
      "Cura artigianale dei dettagli",
    ],
    faq: [
      {
        question: "Realizzate scale su misura anche per spazi ridotti?",
        answer:
          "Sì, ogni scala viene progettata sulle misure dell’ambiente: valutiamo insieme forma e materiali per sfruttare al meglio lo spazio disponibile.",
      },
      {
        question: "I box doccia sono su misura?",
        answer:
          "Sì, realizziamo box doccia su misura per nicchie, angoli e piatti di qualsiasi dimensione, anche in caso di ristrutturazione del bagno.",
      },
    ],
  },
];

export default products;
