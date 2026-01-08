"use client";
import Image from "next/image";
import Link from "next/link";
import {FaFacebook, FaInstagram, FaWhatsapp} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo-esteso.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo-esteso.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <div className="flex items-center">
                  <a
                    href="https://facebook.com/CapoSerramenti"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <FaFacebook/>
                  </a>
                  <a
                    href="https://instagram.com/caposerramenti"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <FaInstagram/>
                  </a>
                  <a
                    href="https://wa.me/393383328269"
                    aria-label="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mr-6 text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                  >
                    <FaWhatsapp/>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h1 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Capo Serramenti
                </h1>
                <h2 className="mb-2 font-semibold text-black dark:text-white">P.IVA IT05563010650</h2>
                <p>di Valentino Capo<br/>Via Ponte Marmoreo 28,<br/>Capaccio Paestum (SA)</p>
              </div>
            </div>

            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Contatti
                </h2>
                <ul>
                  <li>
                    <Link
                      href="tel:+390828722054"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      +39 0828722054
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+393383328269"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      +39 3383328269
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="mailto:caposerramenti@gmail.com"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      caposerramenti@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                  Link rapidi
                </h2>
                <ul>
                  <li>
                    <Link
                      href="/company"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Azienda
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/products"
                      className="mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:text-body-color-dark dark:hover:text-primary"
                    >
                      Prodotti
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
