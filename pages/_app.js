import "../styles/globals.css";
import Header from "../components/Header";
import Layout from "../components/layout";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <content>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </content>
  );
}

export default MyApp;
