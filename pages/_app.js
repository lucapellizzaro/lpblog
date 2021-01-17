import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'


function MyApp({ Component, pageProps }) {
  return (
  <content>
    
    <Header />
      <div className="bg-white">
        <Component {...pageProps} />
      </div>
    <Footer />
    
  </content>
  )
  
  
}

export default MyApp