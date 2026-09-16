import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Doctors from './components/Doctors'
import Locations from './components/Locations'
import Book from './components/Book'
import Faq from './components/Faq'
import Footer from './components/Footer'
import StickyBar from './components/StickyBar'

export default function App() {
  return (
    <div id="top" className="page">
      <a className="skip-link" href="#services">
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Services />
        <Doctors />
        <Locations />
        <Book />
        <Faq />
      </main>
      <Footer />
      <StickyBar />
    </div>
  )
}
