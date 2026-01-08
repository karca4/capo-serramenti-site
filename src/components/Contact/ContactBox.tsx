"use client";

import {useTheme} from "next-themes";
import {MdEmail, MdPhone} from "react-icons/md";
import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";

const ContactBox = () => {
  const {theme} = useTheme();

  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-3xl leading-tight text-black dark:text-white">
        Contatti diretti
      </h3>
      <p
        className="border-body-color/25 text-body-color mb-11 border-b pb-11 text-base leading-relaxed dark:border-white/25">
        Per informazioni, consulenze o preventivi gratuiti puoi contattarci direttamente attraverso i nostri recapiti
        ufficiali.
        <br/><br/>
        Capo Serramenti è sempre disponibile per rispondere alle tue esigenze e accompagnarti nella scelta della
        soluzione più adatta.
      </p>
      <div
        className="border-body-color/25 text-body-color mb-11 border-b pb-11 text-base leading-relaxed dark:border-white/25">
        <h3 className="mb-4 text-xl leading-tight text-black dark:text-white">
          Telefono
        </h3>
        <a
          href="tel:+390828722054"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          <span className="font-bold"><MdPhone className="inline-block mr-0.5"/> Sede operativa: +39 0828 722054</span>
        </a>
        <a
          href="tel:+393383328269"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          <span className="font-bold"><MdPhone className="inline-block mr-0.5"/> Cellulare: +39 338 3328269</span>
        </a>
        <a
          href="https://wa.me/393383328269"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          <span className="font-bold"><FaWhatsapp className="inline-block mr-0.5"/> Cellulare: +39 338 3328269</span>
        </a>
      </div>
      <div
        className="border-body-color/25 text-body-color mb-11 border-b pb-11 text-base leading-relaxed dark:border-white/25">
        <h3 className="mb-4 text-xl leading-tight text-black dark:text-white">
          Email
        </h3>
        <a
          href="mailto:caposerramenti@gmail.com"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          <span className="font-bold"><MdEmail className="inline-block mr-0.5"/> Email: caposerramenti@gmail.com</span>
        </a>
        <a
          href="mailto:valentinocapo@pec.it"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          <span className="font-bold"><MdEmail className="inline-block mr-0.5"/> PEC: valentinocapo@pec.it</span>
        </a>
      </div>
      <div
        className="text-body-color mb-11 pb-11 text-base leading-relaxed">
        <h3 className="mb-4 text-xl leading-tight text-black dark:text-white">
          Social
        </h3>
        <a
          href="https://www.facebook.com/CapoSerramenti"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          <span className="font-bold"><FaFacebook className="inline-block mr-0.5"/> Capo Serramenti</span>
        </a>
        <a
          href="https://www.instagram.com/caposerramenti"
          aria-label="social-link"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
        >
          <span className="font-bold"><FaInstagram className="inline-block mr-0.5"/> Capo Serramenti</span>
        </a>
      </div>
    </div>
  );
};

export default ContactBox;
