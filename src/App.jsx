import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import IslamicInvitation from "./components/IslamicInvitation/IslamicInvitation";
import Couple from "./components/Couple/Couple";
import Events from "./components/Events/Events";
import Countdown from "./components/Countdown/Countdown";
import Gallery from "./components/Gallery/Gallery";
import RSVP from "./components/RSVP/RSVP";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <div id="hero">
        <Hero />
      </div>

      <div id="invitation">
        <IslamicInvitation />
      </div>

      <div id="couple">
        <Couple />
      </div>

      <div id="events">
        <Events />
      </div>

      <div id="gallery">
        <Gallery />
      </div>

      <Countdown />

      <div id="rsvp">
        <RSVP />
      </div>

      <MusicPlayer />

      <Footer />
    </>
  );
}

export default App;