import Link from "next/link";
import Formnewsletter from "../components/Formnewsletter";
import Iconsocial from "../components/Iconsocial";

function Footer() {
  return (
    <footer className="">
      <div>
        <img src="/svg/cornice.svg"></img>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 pb-8 px-5 mt-12 md:container md:mx-auto">
        <div className="hidden lg:block col-span-2 md:col-span-1 mb-10 text-xs text-brand-400">
          <div className="flex mb-4 items-center">
            <div className="">
              <Link href="/">
                <a>
                  <img
                    src="../svg/luca-pellizzaro-monogram.svg"
                    className="h-9 w-9 mr-3"
                  ></img>
                </a>
              </Link>
            </div>
            <div className="fontbodoni text-brand-800 uppercase text-xl font-medium pt-1">
              Luca Pellizzaro
            </div>
          </div>
          <div><Iconsocial /></div>
          <div>&copy;2021 Luca Pellizzaro - P.Iva 03869960249 </div>
          <div>
            Creato con &hearts; da{" "}
            <a
              href="https://bearoba.it"
              className="hover:text-brand-500 hover:underline"
              target="_blank"
            >
              bearoba.it
            </a>
          </div>
          <div className="text-brand-300 mt-1">#reactJS #nextJS #tailwindCSS #vercel</div>
        </div>

        <div className="flex-1 mb-8">
          <h5 className="font-semibold text-brand-400 uppercase mb-2 tracking-widest">
            Argomenti
          </h5>
          <ul className="space-y-1 text-brand-600">
            <li>
              <Link href="/">
                <a className="hover:text-brand-800 hover:underline ml-2">
                  WebApp
                </a>
              </Link>
            </li>

            <li>
              <Link href="/">
                <a className="hover:text-brand-800 hover:underline ml-2">
                  Sicurezza
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:text-brand-800 hover:underline ml-2">
                  Fotografia
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a className="hover:text-brand-800 hover:underline ml-2">
                  Grafica
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="">
          <h5 className="font-semibold text-brand-400 uppercase mb-2 tracking-widest">
            Informazioni
          </h5>
          <ul className="space-y-1 text-brand-600">
            <li>
              <Link href="/chi-sono-biografia">
                <a className="hover:text-brand-800 hover:underline ml-2">
                  Chi sono
                </a>
              </Link>
            </li>

            <li>
              <Link href="/dicono-di-me">
                <a className="hover:text-brand-800 hover:underline ml-2">
                  Dicono di me
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contatti">
                <a className="hover:text-brand-800 hover:underline ml-2">
                  Contatti
                </a>
              </Link>
            </li>
            <li>
              <Link href="/cookie-privacy-policy">
                <a className="hover:text-brand-800 hover:underline ml-2">
                  Cookie Privacy policy
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="mb-8 col-span-2 md:col-span-1">
          <h5 className="font-semibold text-brand-400 uppercase mb-2 tracking-widest">
            Resta aggiornato
          </h5>
          <Formnewsletter />
        </div>

        <div className="lg:hidden col-span-2 lg:col-span-1 mb-10 mt-5 text-xs text-brand-400">
          <div className="flex mb-4 items-center">
            <div className="">
              <Link href="/">
                <a>
                  <img
                    src="/svg/luca-pellizzaro-monogram.svg"
                    className="h-8 w-8 mr-4"
                  ></img>
                </a>
              </Link>
            </div>
            <div className="fontbodoni text-brand-800 uppercase text-xl pt-1">
              Luca Pellizzaro
            </div>
          </div>
          <div><Iconsocial /></div>
          <div>&copy;2021 Luca Pellizzaro</div>
          <div>
            Creato con &hearts; da{" "}
            <a
              href="https://bearoba.it"
              className="hover:text-brand-800 hover:underline"
              target="_blank"
            >
              bearoba.it
            </a>
          </div>
          <div className="text-brand-300 mt-1">#reactJS #nextJS #tailwindCSS #vercel</div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
