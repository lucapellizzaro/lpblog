import '../styles/globals.css'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
  <content>
    <Header />
    <Navbar />
      <Component {...pageProps} />
    <Footer />
  </content>
  )
  
  
}

export default MyApp
