import Head from "next/head";
import Link from "next/link";
import Services from "../components/services"

function Home() {
  return (
    <div className="text-brand-600 mx-auto">
      <Head>
        <title>Luca Pellizzaro | Consulenze digitali</title>
        <meta name="author" content="Luca Pellizzaro"></meta>
        <meta
          name="description"
          content="Consulente digitale siti web SEO ecommerce sicurezza online web app."
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto py-16 md:container">
        <div className="mb-10 text-center">
          <h2 className="fontbodoni text-brand-700 text-5xl uppercase tracking-widest">
            &bull; Home &bull;
          </h2>
        </div>
        <div className="mb-10">
          <Services />
        </div>
      </main>
    </div>
  );
}
export default Home