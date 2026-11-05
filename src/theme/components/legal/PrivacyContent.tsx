import type { ReactNode } from "react";
import { site } from "../../config/site";
import { formatAddress } from "../../lib/format";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-xl font-bold text-black sm:text-2xl dark:text-white">
        {title}
      </h2>
      <div className="text-body-color dark:text-body-color-dark space-y-4 text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}

/**
 * Informativa privacy e cookie generata dai dati del sito.
 * Descrive il comportamento del tema (nessun cookie di profilazione,
 * Google Maps solo su consenso): va verificata per ogni attività.
 */
export default function PrivacyContent() {
  const { emails, address, map, phones } = site.contacts;
  const hasWhatsapp = phones.some((p) => p.whatsapp);
  const socialNames = site.social.map((s) => s.label).join(" e ");
  const { lastUpdate, hostingProvider } = site.pages.privacy;

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="max-w-[820px]">
        <p className="text-body-color mb-10 text-sm">
          Ultimo aggiornamento: {lastUpdate}
        </p>

        <Section title="Titolare del trattamento">
          <p>
            {site.legalName}, con sede in {formatAddress(address)}, P.IVA{" "}
            {site.vatNumber}
            {site.rea && <>, REA {site.rea}</>}
            {site.soleProprietorship
              ? "."
              : ", in persona del legale rappresentante pro tempore."}
            {emails.map((email) => (
              <span key={email.address}>
                <br />
                {email.label}:{" "}
                <a href={`mailto:${email.address}`} className="underline">
                  {email.address}
                </a>
              </span>
            ))}
          </p>
        </Section>

        <Section title="Dati trattati e finalità">
          <p>
            <strong>Dati di navigazione.</strong> Il server che ospita il sito
            registra automaticamente alcuni dati tecnici (indirizzo IP, data e
            ora della richiesta, pagina visitata, tipo di browser) necessari a
            erogare il servizio e a garantirne la sicurezza. Base giuridica:
            legittimo interesse del titolare (art. 6.1.f GDPR).
          </p>
          <p>
            <strong>Dati che ci fornisci tu.</strong> Se ci contatti via email,
            telefono o WhatsApp tratteremo i dati che ci comunichi (nome,
            recapiti, contenuto della richiesta) per rispondere e, se richiesto,
            preparare un preventivo. Base giuridica: esecuzione di misure
            precontrattuali su tua richiesta (art. 6.1.b GDPR). Il conferimento
            è facoltativo, ma senza questi dati non possiamo risponderti. Le
            email sono gestite tramite il nostro fornitore di posta elettronica.
          </p>
          {hasWhatsapp && (
            <p>
              <strong>WhatsApp.</strong> Se ci scrivi su WhatsApp, i messaggi
              transitano sui server di WhatsApp Ireland Ltd (gruppo Meta), che
              li tratta come titolare autonomo secondo la propria informativa.
            </p>
          )}
          <p>
            Il sito non contiene moduli di raccolta dati, non utilizza strumenti
            di statistica o di profilazione e non invia comunicazioni
            commerciali. I dati sono trattati con strumenti elettronici e
            trasmessi su connessione cifrata (HTTPS); non sono soggetti a
            decisioni automatizzate.
          </p>
        </Section>

        <Section title="Cookie e archiviazione locale">
          <p>
            Questo sito non utilizza cookie di profilazione né cookie di terze
            parti{map ? ", salvo quanto indicato per Google Maps" : ""}. Nel
            browser vengono memorizzate solo preferenze tecniche, che non ti
            identificano e per cui non è richiesto consenso:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>il tema scelto (chiaro o scuro);</li>
            {map && <li>la scelta di visualizzare la mappa di Google Maps.</li>}
          </ul>
          {map && (
            <p>
              <strong>Google Maps.</strong> Nella pagina Contatti la mappa viene
              caricata solo dopo che hai cliccato su «Mostra la mappa». Da quel
              momento Google può impostare propri cookie e ricevere dati di
              navigazione, secondo la{" "}
              <a
                href="https://policies.google.com/privacy?hl=it"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                privacy policy di Google
              </a>
              . Puoi revocare la scelta cancellando i dati del sito dalle
              impostazioni del browser.
            </p>
          )}
          <p>
            Caratteri tipografici e immagini (comprese le foto della galleria,
            archiviate su Cloudinary) sono serviti dal nostro server: durante la
            navigazione il browser non contatta servizi di terze parti.
          </p>
          {site.social.length > 0 && (
            <p>
              I collegamenti a {socialNames} sono semplici link: il sito non
              incorpora plugin social. Se li apri, si applica l’informativa del
              social network.
            </p>
          )}
        </Section>

        <Section title="Fornitori e trasferimenti">
          <p>
            Il sito è ospitato da {hostingProvider}, che tratta i dati di
            navigazione in qualità di responsabile del trattamento. Il
            trasferimento verso gli Stati Uniti avviene sulla base dell’EU-US
            Data Privacy Framework e delle clausole contrattuali standard.
          </p>
        </Section>

        <Section title="Conservazione">
          <p>
            I dati di navigazione sono conservati per il tempo strettamente
            necessario alla sicurezza del servizio. I dati delle richieste di
            contatto sono conservati per il tempo necessario a gestirle e, in
            caso di rapporto commerciale, per i termini previsti dalla legge.
          </p>
        </Section>

        <Section title="I tuoi diritti">
          <p>
            Puoi chiedere in qualsiasi momento l’accesso ai tuoi dati, la
            rettifica, la cancellazione, la limitazione o l’opposizione al
            trattamento e la portabilità (artt. 15-22 GDPR), scrivendo ai
            recapiti indicati sopra. Hai inoltre diritto di proporre reclamo al{" "}
            <a
              href="https://www.garanteprivacy.it"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              Garante per la protezione dei dati personali
            </a>
            .
          </p>
        </Section>
      </div>
    </div>
  );
}
