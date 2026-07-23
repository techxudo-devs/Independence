import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import HeroBottom from "./HeroBottom";
import Hero3 from "./Hero3";
import EventHighlights from "./EventHighlights";
import Gift from "./Gift";
import Schedule from "./Schedule";
import ThreeCards from "./ThreeCards";
import Presentation from "./Presentation";
import RegisterSection from "./RegisterSection";
import Topbar from "./Topbar";

const Homepage = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <div id="home">
        <Hero3 />
      </div>
      <div id="highlights">
        <HeroBottom />
      </div>
      <div id="about">
        <EventHighlights />
      </div>
      <div id="gift">
        <Gift />
      </div>
      <div id="register">
        <RegisterSection />
      </div>
      <div id="schedule">
        <Schedule />
      </div>
      <RegisterSection />
      <div id="contact">
        <ThreeCards />
      </div>
      <RegisterSection />
      <div id="presented">
        <Presentation />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
