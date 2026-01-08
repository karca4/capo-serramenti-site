import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path
      d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z"/>
  </svg>
);

const Company = () => {
  const List = ({text}) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="company" className="pt-16 md:pt-20 lg:pt-28">
      <div id="company-history" className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="La nostra storia"
                paragraph="Capo Serramenti nasce a Capaccio Paestum (SA) nel gennaio 2017, dall’esperienza e dalla passione di Valentino Capo, maturata in oltre vent’anni di attività nel settore della lavorazione dell’alluminio e del ferro. Il percorso professionale prende avvio nel 1993 con Tirrena Alluminio, realtà che negli anni si è affermata sul territorio per la qualità dei prodotti e dei servizi offerti. Dopo lo scioglimento della società, Valentino Capo decide di proseguire il lavoro intrapreso, dando vita a un nuovo progetto imprenditoriale: Capo Serramenti. Un’azienda che unisce tradizione artigiana e innovazione, cresciuta nel tempo grazie alla fiducia dei clienti e a un costante impegno verso l’eccellenza."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Capo Serramenti"/>
                    <List text="Capaccio Paestum"/>
                    <List text="Esperienza trentennale"/>
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Fiducia conquistata"/>
                    <List text="Soluzioni per la casa"/>
                    <List text="Tradizione artigiana"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/company/about-image.svg"
                  alt="company-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/company/about-image-dark.svg"
                  alt="company-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="company-mission" className="container">
        <div className="border-b border-body-color/[.15] py-16 dark:border-white/[.15] md:py-20 lg:py-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="La nostra mission"
                paragraph="La mission di Capo Serramenti è offrire serramenti, infissi e soluzioni su misura che uniscano funzionalità, sicurezza ed estetica, rispondendo in modo concreto alle esigenze di ogni cliente. Ogni progetto viene seguito personalmente in tutte le sue fasi: dalla progettazione alla realizzazione artigianale, fino all’installazione e alla manutenzione. L’esperienza trentennale, l’abilità manuale e la creatività permettono di realizzare prodotti unici, curati nel minimo dettaglio e pensati per durare nel tempo."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Serramenti su misura"/>
                    <List text="Progettazione e installazione"/>
                    <List text="Assistenza e manutenzione"/>
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Infissi personalizzati"/>
                    <List text="Qualità artigianale"/>
                    <List text="Soddisfazione del cliente"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/company/about-image.svg"
                  alt="company-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/company/about-image-dark.svg"
                  alt="company-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="company-vision" className="container">
        <div className="border-b border-body-color/[.15] py-16 dark:border-white/[.15] md:py-20 lg:py-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="La nostra vision"
                paragraph="Guardiamo al futuro mantenendo salde le nostre radici artigiane. La vision di Capo Serramenti è diventare un punto di riferimento per chi cerca qualità, affidabilità e soluzioni personalizzate nel settore dei serramenti. Investiamo costantemente in: materiali innovativi, tecnologie moderne, collaborazioni con partner qualificati. Il nostro obiettivo è migliorare il comfort abitativo e valorizzare ogni spazio, senza mai perdere di vista ciò che ci distingue: la passione per il dettaglio e l’attenzione verso il cliente."
                mb="44px"
              />

              <div
                className="mb-12 max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Innovazione nei serramenti"/>
                    <List text="Comfort abitativo"/>
                    <List text="Materiali di alta qualità"/>
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    <List text="Soluzioni su misura"/>
                    <List text="Eccellenza artigiana"/>
                    <List text="Affidabilità nel tempo"/>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-25/24 max-w-[500px] lg:mr-0">
                <Image
                  src="/images/company/about-image.svg"
                  alt="company-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/company/about-image-dark.svg"
                  alt="company-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
