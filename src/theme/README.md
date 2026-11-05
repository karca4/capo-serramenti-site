# Tema "sito vetrina"

Modulo riutilizzabile per siti vetrina di attività locali (Next.js 16, React 19,
Tailwind CSS v4). Il tema non contiene dati aziendali: identità, recapiti,
testi, prodotti, colori e font arrivano tutti da `src/site/`.

## Come è diviso il progetto

| Percorso     | Cosa contiene                                                         | In un nuovo sito     |
| ------------ | --------------------------------------------------------------------- | -------------------- |
| `src/theme/` | Componenti, tipi della configurazione, SEO, Cloudinary, stili di base | **Copia** così com'è |
| `src/app/`   | Rotte Next.js: pagine sottili che compongono il tema                  | **Copia** così com'è |
| `src/site/`  | Configurazione e contenuti dell'attività                              | **Riscrivi**         |
| `public/`    | Logo, favicon, immagini di hero e prodotti                            | **Sostituisci**      |

L'unico punto in cui il tema legge dal sito è `src/theme/config/site.ts`.

## Creare un nuovo sito

1. **Copia** nella root del nuovo progetto:
   - `src/theme/` e `src/app/`
   - `next.config.js`, `postcss.config.js`, `eslint.config.mjs`,
     `tsconfig.json`, `.gitignore`, `.env.example`
   - le dipendenze di `package.json` (`next`, `react`, `react-dom`,
     `next-themes`, `react-icons`, `framer-motion`, `tailwindcss`,
     `@tailwindcss/postcss`, `postcss`) e le devDependencies di lint/TypeScript
2. **Crea `src/site/`** partendo da quella di Plastic House:
   - `config.ts`: oggetto `SiteConfig` (vedi `src/theme/config/types.ts`, ogni
     campo è commentato). TypeScript segnala qualunque campo mancante.
   - `products.ts`: prodotti o servizi (usati da home, menu, pagine dettaglio
     e sitemap). Per farli indicizzare da Google dai a ogni prodotto testi
     propri: `seo` (titolo e descrizione con la zona), `description`,
     `applications` (elenco "cosa realizziamo"), `benefits` e `faq`.
   - `blog.ts` (facoltativo): articoli del blog, dal più recente. Ogni
     articolo ha `slug` (URL `/blog/<slug>`), data ISO, `seo` e un testo in
     blocchi (`p`, `h2`, `h3`, `ul`).
   - `redirects.mjs`: rimandi permanenti dai vecchi indirizzi del sito
     (letti da `next.config.js`); lascia l'elenco vuoto se non servono.
   - `fonts.ts`: font da `next/font`, con variabili `--font-body` e
     `--font-heading`.
   - `theme.css`: colori del brand (`--color-primary`, `--color-accent`, …).
3. **Sostituisci `public/`**: `favicon.ico`, `apple-icon.png` (180×180),
   logo esteso e simbolo (più, se serve, le versioni chiare per tema scuro e
   foto della hero, campo `light` in `config.logo`), immagini della hero (desktop e mobile) e dei
   prodotti. I percorsi sono quelli indicati in `config.ts`.
4. **Variabili d'ambiente** (in locale `.env.local`, su Vercel _Settings →
   Environment Variables_): `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`,
   `CLOUDINARY_API_SECRET`. La cartella delle foto si imposta in
   `config.gallery.cloudinaryFolder`.
5. Verifica con `npm run lint` e `npm run build`.

## Pagine incluse

| Rotta                         | Contenuto                                                                                    |
| ----------------------------- | -------------------------------------------------------------------------------------------- |
| `/`                           | Hero, punti di forza, prodotti, come lavoriamo, anteprima galleria, news, invito al contatto |
| `/company`                    | Sezioni "chi siamo" (`pages.company.sections`)                                               |
| `/product-details/[id]`       | Dettaglio prodotto, generato staticamente; altri id → 404                                    |
| `/gallery`                    | Galleria Cloudinary con scroll infinito e lightbox                                           |
| `/contact`                    | Testi, mappa Google (solo dopo consenso), contatti                                           |
| `/privacy`                    | Informativa generata dai dati del sito, **da verificare** per ogni attività                  |
| `/blog`                       | Elenco news; `noindex` finché è vuoto                                                        |
| `/blog/[slug]`                | Articolo, generato staticamente, con dati BlogPosting per Google; altri slug → 404           |
| `/sitemap.xml`, `/robots.txt` | Generati da pagine, prodotti e articoli                                                      |

Ogni pagina ha titolo, descrizione e URL canonico da `config.seo`; il dominio
ufficiale è `config.url` (es. `https://www.esempio.it`, lo stesso impostato
come principale su Vercel). Orari (`openingHours`) e zona servita
(`serviceArea`, `areaServed`) compaiono nel sito e nei dati per Google. Per
le ditte individuali imposta `soleProprietorship: true` (privacy senza
"legale rappresentante"); per le società compila `rea` e `shareCapital`. Il layout
inserisce i dati strutturati schema.org (`businessType`, di default
`LocalBusiness` o un suo sottotipo).

### Sezioni opzionali della home

Le sezioni compaiono solo se il relativo campo è presente in `config.ts`:

| Campo                 | Sezione                                                                                |
| --------------------- | -------------------------------------------------------------------------------------- |
| `pages.home.features` | Punti di forza: card con icona (`FeatureIconName`), titolo e testo                     |
| `pages.home.process`  | "Come lavoriamo": passi numerati (timeline verticale su smartphone)                    |
| `pages.home.gallery`  | Anteprima con le prime `count` foto di Cloudinary; nascosta se Cloudinary non risponde |
| `blog`                | News (ultimi 3 articoli): la sezione sparisce se l'elenco è vuoto                      |
| `partners`            | Partner con logo (o nome) e link al loro sito                                          |

`cta` (obbligatorio) alimenta la fascia "Richiedi un preventivo" in fondo alla
home e il pulsante preventivo di header e menu mobile.

## Interfaccia

- **Mobile-first**: su smartphone l'header mostra solo logo, cambio tema e
  menu, per lasciare tutto lo schermo ai contenuti. Il menu è un pannello a
  schermo intero con in fondo Preventivo, Chiama e WhatsApp (se un numero ha
  `whatsapp: true`). Da `lg` (992px) in su compaiono il menu orizzontale e il
  pulsante preventivo nell'header.
- **Tema**: `appearance.defaultTheme` sceglie `"light"`, `"dark"` o `"system"`;
  l'utente può sempre cambiarlo con il pulsante nell'header.
- **Logo**: con `logo.full.light` / `logo.mark.light` il tema mostra la
  versione chiara sopra la foto della hero e nel tema scuro; senza, usa sempre
  il logo normale.
- **Colori**: sull'accento il testo è nero (contrasto WCAG AA con arancioni e
  gialli). Se il brand usa un accento scuro, rivedi la variante `accent` in
  `components/common/Button.tsx`.

## Aggiornare il tema nei siti esistenti

I siti non condividono il codice: una correzione al tema va copiata in ogni
repository. Per renderlo semplice, non modificare `src/theme/` e `src/app/` in
un singolo sito: le personalizzazioni vanno in `src/site/`. Se serve una
variante, aggiungi un'opzione alla configurazione e portala in tutti i siti.
