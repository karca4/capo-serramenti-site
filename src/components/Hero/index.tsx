import Link from "next/link";
import {MdOutlineSearch, MdOutlineEmail} from 'react-icons/md';

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[120px] dark:bg-gray-dark md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1
                  className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Capo Serramenti
                </h1>
                <h2 className="mb-5 text-xl font-medium leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight">
                  la soluzione per la tua casa a portata di mano
                </h2>
                <p
                  className="mb-12 text-base leading-relaxed! text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  Serramenti, infissi e zanzariere su misura a Capaccio Paestum, Salerno. Qualità artigianale,
                  materiali certificati e oltre 30 anni di esperienza nella lavorazione di alluminio, PVC e ferro.
                  Installazione e manutenzione di zanzariere, infissi blindati e finestre a taglio termico per
                  abitazioni e attività commerciali.
                </p>
                <div
                  className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/blog"
                    className="rounded-xs bg-primary px-8 py-4 text-base font-semibold text-lg text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    <MdOutlineSearch className="mr-2 inline-block text-lg"/>
                    Scopri di più
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block rounded-xs bg-black px-8 py-4 text-base font-semibold text-lg text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
                  >
                    <MdOutlineEmail className="mr-2 inline-block text-lg"/>
                    Contattaci
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
