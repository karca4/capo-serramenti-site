import type { BlogPost } from "@/theme/config/types";

// Dal più recente al meno recente: la home mostra i primi tre.
const blog: BlogPost[] = [
  {
    slug: "risparmio-energetico",
    title: "Risparmio energetico con alluminio a taglio termico o PVC",
    excerpt:
      "L’efficienza energetica è ormai centrale nella scelta degli infissi: ecco perché alluminio a taglio termico e PVC superano i serramenti tradizionali.",
    image: "/images/products/pvc.jpg",
    tags: ["Taglio termico", "PVC"],
    publishDate: "2025-02-20",
    seo: {
      title:
        "Infissi in alluminio a taglio termico e PVC: risparmio energetico",
      description:
        "Infissi in alluminio a taglio termico e PVC per migliorare l’efficienza energetica della casa a Capaccio Paestum e Salerno: isolamento, comfort e risparmio in bolletta.",
    },
    content: [
      {
        type: "p",
        text: "Negli ultimi anni il tema dell’efficienza energetica è diventato centrale nella scelta degli infissi. Le moderne soluzioni in alluminio a taglio termico e PVC rappresentano un importante passo avanti rispetto ai tradizionali serramenti in legno o in alluminio non isolato, garantendo maggiore isolamento termico, comfort abitativo e riduzione dei consumi.",
      },
      {
        type: "h2",
        text: "Infissi in PVC: isolamento naturale e massima efficienza",
      },
      {
        type: "p",
        text: "Il PVC è uno dei materiali più performanti dal punto di vista dell’isolamento termico. Grazie alla struttura interna a camere multiple, riduce al minimo la dispersione di calore e aiuta a mantenere stabile la temperatura interna dell’abitazione.",
      },
      {
        type: "p",
        text: "Rispetto a soluzioni tradizionali in legno o alluminio non isolato, gli infissi in PVC garantiscono:",
      },
      {
        type: "ul",
        items: [
          "Elevato isolamento termico e acustico",
          "Riduzione dei consumi energetici",
          "Nessuna manutenzione nel tempo",
          "Resistenza agli agenti atmosferici",
          "Ottimo rapporto qualità-prezzo",
        ],
      },
      {
        type: "h2",
        text: "Alluminio a taglio termico: design e prestazioni",
      },
      {
        type: "p",
        text: "Nei profili a taglio termico una barriera isolante separa la parte interna da quella esterna del serramento e interrompe il passaggio del calore. Così l’alluminio unisce le sue doti di sempre, leggerezza, resistenza e profili sottili, a prestazioni energetiche paragonabili a quelle del PVC, anche con grandi vetrate.",
      },
      {
        type: "h2",
        text: "Perché superano le soluzioni tradizionali?",
      },
      {
        type: "p",
        text: "Gli infissi in legno, seppur eleganti, richiedono manutenzione costante e nel tempo possono perdere efficienza. L’alluminio tradizionale, senza taglio termico, favorisce invece la dispersione di calore.",
      },
      {
        type: "p",
        text: "Alluminio a taglio termico e PVC sono oggi la scelta più intelligente per chi vuole migliorare la classe energetica della casa, aumentare il comfort e valorizzare il proprio immobile. Investire in serramenti ad alta efficienza significa risparmiare oggi e proteggere il valore della casa nel lungo periodo.",
      },
      {
        type: "p",
        text: "Vuoi capire quale soluzione è più adatta alla tua casa? Contattaci per un sopralluogo e un preventivo gratuito.",
      },
    ],
  },
  {
    slug: "zanzariere",
    title: "Le nuove soluzioni per le zanzariere",
    excerpt:
      "Non farti attaccare dalle zanzare quest’estate: le zanzariere di nuova generazione uniscono protezione, design e resistenza, su misura per ogni infisso.",
    image: "/images/products/zanzariere.jpg",
    tags: ["Zanzariere"],
    publishDate: "2025-02-14",
    seo: {
      title: "Nuove zanzariere su misura: comfort e protezione per l’estate",
      description:
        "Le nuove soluzioni per zanzariere: sistemi moderni, su misura e dal design discreto per proteggere la casa d’estate, migliorando comfort e aerazione degli ambienti.",
    },
    content: [
      {
        type: "p",
        text: "Le zanzariere di nuova generazione sono oggi una soluzione pratica, elegante e indispensabile per vivere la casa in pieno comfort.",
      },
      {
        type: "p",
        text: "Negli ultimi anni il settore ha fatto grandi passi avanti: le nuove zanzariere uniscono funzionalità, design e resistenza e si adattano a ogni tipo di infisso. Non sono più una semplice rete protettiva, ma un vero e proprio elemento integrato nel serramento.",
      },
      { type: "h2", text: "Perché scegliere le nuove zanzariere?" },
      { type: "p", text: "Le zanzariere moderne offrono numerosi vantaggi:" },
      {
        type: "ul",
        items: [
          "Protezione efficace contro zanzare e insetti",
          "Migliore aerazione degli ambienti",
          "Sistemi scorrevoli, a molla o plissettati",
          "Design discreto ed elegante",
          "Materiali resistenti e durevoli nel tempo",
        ],
      },
      {
        type: "p",
        text: "Grazie alle innovazioni tecniche, oggi è possibile installare zanzariere su misura per finestre, porte-finestre, balconi e verande, con soluzioni adatte anche alle grandi aperture.",
      },
      { type: "h2", text: "Comfort e benessere durante l’estate" },
      {
        type: "p",
        text: "Le zanzariere permettono di vivere la casa in modo più naturale, riducendo l’uso dei climatizzatori e favorendo il ricambio d’aria: ambienti più salubri e risparmio energetico, due aspetti sempre più importanti per le famiglie.",
      },
      {
        type: "p",
        text: "Le nuove reti sono inoltre progettate per garantire maggiore trasparenza e luminosità, senza compromettere la visibilità verso l’esterno.",
      },
      { type: "h2", text: "Zanzariere su misura per ogni esigenza" },
      {
        type: "p",
        text: "Ogni abitazione ha caratteristiche diverse: per questo è importante scegliere soluzioni personalizzate. Le zanzariere moderne si integrano con gli infissi esistenti, mantenendo estetica e funzionalità.",
      },
      {
        type: "p",
        text: "Con l’estate alle porte, investire in zanzariere di qualità significa migliorare il comfort quotidiano e proteggere la casa in modo semplice ed efficace. Se stai pensando di installarne di nuove, contattaci: ti aiutiamo a scegliere la soluzione su misura per prepararti alla stagione calda senza pensieri.",
      },
    ],
  },
];

export default blog;
