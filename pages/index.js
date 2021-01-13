import Head from 'next/head'
import Link from 'next/link'

export default function Home() {


  const posts = [
    {
      title: "Adeguare il tuo sito o app alle normative",
      imageurl: "/elsa-noblet-5KD5PmZEfcg-unsplash.jpg",
      category: "Networking",
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
    <div className="text-brand-600 mx-auto md:px-12">
      <Head>
        <title>Luca Pellizzaro | Consulenze digitali</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>

        <div className="px-2 mb-10 mt-8">
          <div className="mx-auto">
          <img src="/luca-pellizzaro-monogram.svg" className="h-20 w-full"></img>
          </div>
        </div>

      </header>

      <section className="bg-gray-200 lg:mx-auto sm:bg-transparent lg:w-1/2 fixed sm:static sm:mb-8 bottom-0 w-full">
        <div className="flex-row flex space-x-3 pb-2 pt-3 px-3">
          
              <div className="flex-1">
                <Link href="/">
                  <a className="sm:flex sm:flex-row sm:w-32">
                    <div className="">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      </div>
                      <div className="sm:ml-2 sm:pt-1 hidden sm:block">
                        Home
                      </div>
                  </a>
                </Link>
              </div>
            
            

              <div className="flex-1">
                <Link href="/">
                <a className="sm:flex sm:flex-row sm:w-32">
                    <div className="">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                      </div>
                      <div className="sm:ml-2 sm:pt-1 hidden sm:block">
                        Chi sono
                      </div>
                  </a>
                </Link>
              </div>

            <div className="flex-1">
                <Link href="/">
                <a className="sm:flex sm:flex-row sm:w-32">
                    <div className="">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="sm:ml-2 sm:pt-1 hidden sm:block">
                        Diario
                      </div>
                  </a>
                </Link>
              </div>
            
            <div className="flex-1">
                <Link href="/">
                <a className="sm:flex sm:flex-row sm:w-32">
                    <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                      </div>
                      <div className="sm:ml-2 sm:pt-1 hidden sm:block">
                        Portfolio
                      </div>
                  </a>
                </Link>
              </div>

            <div className="flex-1">
                <Link href="/">
                <a className="sm:flex sm:flex-row sm:w-32">
                    <div className="">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                      </div>
                      <div className="sm:ml-2 sm:pt-1 hidden sm:block">
                        Contatti
                      </div>
                  </a>
                </Link>
              </div>
              
        </div>
      </section>


      <main className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">

        

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

      <footer>
        <div className="flex-row flex py-3 mt-12">
          <div className="flex-1">1</div>
          <div className="flex-1">2</div>
          <div className="flex-1">3</div>
        </div>
      </footer>

      
      
    </div>
  )
}
