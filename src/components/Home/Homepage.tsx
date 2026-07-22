import About from './About'
import Contact from './Contact'
import Footer from '../common/Footer'
import Hero from './Hero'
import LuckyDraw from './LuckyDraw'
import Navbar from '../common/Navbar'
import PresentedBy from './PresentedBy'
import Sponsorship from './Sponsorship'
import Hero2 from './Hero2'
import HeroBottom from './HeroBottom'
import Hero3 from './Hero3'
import EventHighlights from './EventHighlights'
import Gift from './Gift'
import Schedule from './Schedule'
import ThreeCards from './ThreeCards'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div id="home">
          <Hero3 />
        </div>
        <HeroBottom />
        <div id="about">
          {/* <About /> */}
          <EventHighlights />
        </div>
        <Gift />
        <Schedule />
        <ThreeCards />
        {/* <div id="events">
          <LuckyDraw />
        </div> */}
        <div id="sponsorship">
          <Sponsorship />
        </div>
        <div id="presented">
          <PresentedBy />
        </div>
        {/* <div id="contact">
          <Contact />
        </div> */}
        <Footer />
    </div>
  )
}

export default Homepage