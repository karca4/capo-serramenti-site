import ContactBox from "./ContactBox";
import {MdMail} from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Un contatto diretto, una soluzione su misura
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Capo Serramenti ti aspetta presso la sua sede operativa e showroom a Capaccio Paestum (Salerno), il
                luogo ideale per toccare con mano la qualità dei nostri serramenti, infissi e zanzariere su misura.
                <br/>
                Siamo a disposizione per consulenze personalizzate, sopralluoghi e preventivi gratuiti, accompagnandoti
                in ogni fase del progetto, dalla scelta dei materiali alla realizzazione finale.
              </p>
              <h3 className="mb-3 text-xl text-black dark:text-white sm:text-3xl lg:text-xl xl:text-2xl">
                Dove siamo
              </h3>
              <p className="text-base font-medium text-body-color">
                La sede di Capo Serramenti si trova in:
                <br/>
                <span className="font-bold">Via Ponte Marmoreo 28, 84047 – Capaccio Paestum (SA)</span>
                <br/>
                <br/>
                Presso il nostro showroom potrai:
                <ul className="list-disc list-inside">
                  <li>vedere da vicino infissi e serramenti su misura</li>
                  <li>valutare materiali, finiture e soluzioni tecniche</li>
                  <li>ricevere assistenza diretta e professionale</li>
                </ul>
                <br/>
                <br/>
                Operiamo principalmente a Capaccio Paestum e in tutta la provincia di Salerno, con possibilità di
                interventi anche su scala nazionale.
              </p>
              <iframe className="border-0 my-12"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41822.8037794231!2d15.000045849029387!3d40.43288685940191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133bfd7d14a7f02b%3A0xdec7c3a2c8d1b32c!2sCapo%20Serramenti%20di%20Valentino%20Capo.%20Infissi%20in%20alluminio%2C%20pvc%2C%20ferro.!5e1!3m2!1sen!2sit!4v1767871600352!5m2!1sen!2sit"
                      width="100%" height="650" allowFullScreen={true} loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade">
              </iframe>

              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Scrivici per un preventivo gratuito
              </h2>
              <p className="mb-3 text-base font-medium text-body-color">
                Che tu stia ristrutturando casa o progettando una nuova installazione, Capo Serramenti è il partner
                giusto per soluzioni affidabili, durature e personalizzate.
                <br/><br/>
                Scrivi una mail all'indirizzo
                <span className="font-bold"><a
                  href="mailto:caposerramenti@gmail.com"> caposerramenti@gmail.com </a></span>
                per richiedere un preventivo gratuito e senza impegno
              </p>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <ContactBox/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
