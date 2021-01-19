import Head from "next/head";
import Link from "next/link";

import Date from "../components/date";

import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function Blog({ allPostsData }) {
  const posts = [
    {
      title: "Adeguare il tuo sito o app alle normative",
      data: "10 Ago 2020",
      imageurl: "/images/elsa-noblet-5KD5PmZEfcg-unsplash.jpg",
      category: "Grafica",
      desc:
        "Siti web ed app devono sempre rispettare alcuni obblighi imposti dalla legge. Il mancato rispetto delle norme, infatti, comporta il rischio di ingenti sanzioni. Per questo ho scelto di affidarmi a iubenda, azienda composta da figure sia legali che tecniche, specializzata in questo settore.",
    },
    {
      title: "Addio password",
      data: "06 Ott 2020",
      imageurl: "/images/johnny-mcclung-40EZGrutbTg-unsplash.jpg",
      category: "Sicurezza",
      desc:
        "Dal 2021 ho tutta l’intenzione di offrire su tutte le piattaforme fornite dal mio team un’esperienza di registrazione o accesso tramite collegamento “magico” di ultima generazione, in cui gli utenti possono autenticarsi semplicemente facendo clic su un collegamento e-mail. Aziende come Slack, Medium e Substack sono note per la facilità di inserimento degli utenti tramite collegamenti one-click di tipo Token. ",
    },
    {
      title: "Adeguare il tuo sito o app alle normative",
      data: "18 Apr 2020",
      imageurl: "/images/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
      category: "Web",
      desc:
        "Siti web ed app devono sempre rispettare alcuni obblighi imposti dalla legge. Il mancato rispetto delle norme, infatti, comporta il rischio di ingenti sanzioni. Per questo ho scelto di affidarmi a iubenda, azienda composta da figure sia legali che tecniche, specializzata in questo settore.",
    },
    {
      title: "Adeguare il tuo sito o app alle normative",
      data: "27 Gen 2020",
      imageurl: "/images/martin-sanchez-G78c3DPmD_A-unsplash.jpg",
      category: "Web",
      desc:
        "Siti web ed app devono sempre rispettare alcuni obblighi imposti dalla legge. Il mancato rispetto delle norme, infatti, comporta il rischio di ingenti sanzioni. Per questo ho scelto di affidarmi a iubenda, azienda composta da figure sia legali che tecniche, specializzata in questo settore.",
    },
  ];

  return (
    
    <div className="text-brand-900">
      <Head>
        <title>Diario Blog | Luca Pellizzaro | Consulenze digitali</title>
        <meta name="author" content="Luca Pellizzaro"></meta>
        <meta
          name="description"
          content="Consulente digitale siti web SEO ecommerce sicurezza online web app."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <div className="mb-20 text-center">
          <h2 className="fontbodoni text-brand-700 text-5xl uppercase tracking-widest">
            &bull; Diario &bull;
          </h2>
        </div>

        <div className="md:mx-auto md:container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {allPostsData.map(
            ({ id, date, title, coverimage, category, excerpt }) => (
              <article key={id}>
                <div className="px-2 sm:pb-4 grid grid-cols-3 sm:grid-cols-1 gap-1 items-center mb-4">
                  <div class="col-auto sm:mb-1">
                    <img
                      src={coverimage}
                      alt={title}
                      className="object-cover h-32 sm:h-48 w-full rounded"
                    ></img>
                  </div>
                  <div className="col-span-2 pl-3 sm:pl-1 sm:pr-1 sm:mt-4">
                    <div className="flex justify-between">
                      <div>
                        <h6 className="uppercase text-sm pb-1 sm:pb-2 text-brand-400 tracking-widest">
                          {category}
                        </h6>
                      </div>
                      <div>
                        <p className="uppercase text-sm pb-1 sm:pb-2 text-brand-400 tracking-widest">
                          <Date dateString={date} />
                        </p>
                      </div>
                    </div>

                    <Link href={`/posts/${id}`}>
                      <a>
                        <h2 className="fontbodoni text-brand-800 hover:text-brand-600 hover:underline pb-1 text-2xl sm:text-4xl sm:mb-3">
                          {title}
                        </h2>
                      </a>
                    </Link>
                    <p className="hidden sm:block sm:pb-5">{excerpt}</p>
                    <Link href={`/posts/${id}`}>
                      <button
                        type="button"
                        className="uppercase text-sm pt-1 hover:text-pink-600 text-brand-700"
                      >
                        &rarr; Leggi tutto
                      </button>
                    </Link>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </main>
    </div>
   
  );
}
export default Blog;
