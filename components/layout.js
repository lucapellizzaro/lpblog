import Head from "next/head";
import Link from "next/link";

const name = "Luca Pellizzaro";
export const siteTitle = "Consulenze digitali";

export default function Layout({ children }) {
  return (
    <div className="bg-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Consulente digitale siti web SEO ecommerce sicurezza online web app."
        />
      </Head>
      
        <main className="md:max-w-6xl px-2 mx-auto py-16">{children}</main>
        
      
    </div>
  );
}
