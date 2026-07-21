import About from './About'
import Contact from './Contact'
import Footer from '../common/Footer'
import Hero from './Hero'
import LuckyDraw from './LuckyDraw'
import Navbar from '../common/Navbar'
import PresentedBy from './PresentedBy'
import Sponsorship from './Sponsorship'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="events">
          <LuckyDraw />
        </div>
        <div id="sponsorship">
          <Sponsorship />
        </div>
        <div id="presented">
          <PresentedBy />
        </div>
        <div id="contact">
          <Contact />
        </div>
        <Footer />
    </div>
  )
}

export default Homepage