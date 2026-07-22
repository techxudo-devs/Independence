import Footer from '../common/Footer'
import Navbar from '../common/Navbar'
import HeroBottom from './HeroBottom'
import Hero3 from './Hero3'
import EventHighlights from './EventHighlights'
import Gift from './Gift'
import Schedule from './Schedule'
import ThreeCards from './ThreeCards'
import Presentation from './Presentation'

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div id="home">
          <Hero3 />
        </div>
        <div id="highlights">
          <HeroBottom />
        </div>
        <div id="about">
          {/* <About /> */}
          <EventHighlights />
        </div>
        <div id="gift">
          <Gift />
        </div>
        <div id="schedule">
          <Schedule />
        </div>
        <div id="contact">
          <ThreeCards />
        </div>
        {/* <div id="events">
          <LuckyDraw />
        </div> */}
        {/* <div id="sponsorship">
          <Sponsorship />
        </div> */}
        <div id="presented">
          <Presentation />
        </div>
        {/* <div id="contact">
          <Contact />
        </div> */}
        <Footer />
    </div>
  )
}

export default Homepage