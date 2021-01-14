import Head from 'next/head'
import Link from 'next/link'

export default function Home() {


  const posts = [
    {
      title: "Adeguare il tuo sito o app alle normative",
      imageurl: "/elsa-noblet-5KD5PmZEfcg-unsplash.jpg",
      category: "smartworking",
      desc: "Siti web ed app devono sempre rispettare alcuni obblighi imposti dalla legge. Il mancato rispetto delle norme, infatti, comporta il rischio di ingenti sanzioni. Per questo ho scelto di affidarmi a iubenda, azienda composta da figure sia legali che tecniche, specializzata in questo settore.",
    },
    {
      title: "Addio password",
      imageurl: "/johnny-mcclung-40EZGrutbTg-unsplash.jpg",
      category: "Sicurezza",
      desc: "Dal 2021 ho tutta l’intenzione di offrire su tutte le piattaforme fornite dal mio team un’esperienza di registrazione o accesso tramite collegamento “magico” di ultima generazione, in cui gli utenti possono autenticarsi semplicemente facendo clic su un collegamento e-mail. Aziende come Slack, Medium e Substack sono note per la facilità di inserimento degli utenti tramite collegamenti one-click di tipo Token. ",
    },
    {
      title: "Adeguare il tuo sito o app alle normative",
      imageurl: "/marvin-meyer-SYTO3xs06fU-unsplash.jpg",
      category: "Web",
      desc: "Siti web ed app devono sempre rispettare alcuni obblighi imposti dalla legge. Il mancato rispetto delle norme, infatti, comporta il rischio di ingenti sanzioni. Per questo ho scelto di affidarmi a iubenda, azienda composta da figure sia legali che tecniche, specializzata in questo settore.",
    },
    {
      title: "Adeguare il tuo sito o app alle normative",
      imageurl: "/martin-sanchez-G78c3DPmD_A-unsplash.jpg",
      category: "Web",
      desc: "Siti web ed app devono sempre rispettare alcuni obblighi imposti dalla legge. Il mancato rispetto delle norme, infatti, comporta il rischio di ingenti sanzioni. Per questo ho scelto di affidarmi a iubenda, azienda composta da figure sia legali che tecniche, specializzata in questo settore.",
    },

    
  ]


  return (
    <div className="text-brand-600 mx-auto">
      <Head>
        <title>Luca Pellizzaro | Consulenze digitali</title>
        <meta name="author" content="Luca Pellizzaro"></meta>
        <meta name="description" content="Consulente digitale siti web SEO ecommerce sicurezza online web app."></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      



      <main className="md:mx-auto md:container grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

        
      {posts.map((post) => (
        <article>
          <div className="px-2 sm:pb-4 grid grid-cols-3 sm:grid-cols-1 gap-1">
          <div class="col-auto mb-5 sm:mb-1">
              <img 
              src={post.imageurl} 
              alt={post.title} 
              className="object-cover h-32 sm:h-48 w-full rounded"
              ></img>
            </div>
              <div className="col-span-2 pl-3 sm:pl-1 sm:pr-1 mt-1 sm:mt-4">
                <h6 className="uppercase text-sm pb-1 sm:pb-2 text-brand-200 tracking-widest">{post.category}</h6>
                <Link href="/">
                <a>
                  <h2 className="fontbodoni text-brand-500 hover:text-brand-400 pb-1 text-xl sm:text-4xl sm:mb-3">{post.title}</h2>
                </a>  
                </Link>
                <p className="hidden sm:block sm:pb-5">{post.desc}</p>
                <Link href="/">
                <button type="button" className="pt-1 hover:text-brand-200 text-brand-300">
                  &rarr; Leggi tutto 
                </button>
                </Link>
              </div>
          </div>
        </article>
      ))}
      </main>

     

      
      
    </div>
  )
}
