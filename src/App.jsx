import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import IslamicInvitation from "./Components/IslamicInvitation/IslamicInvitation";
import Couple from "./Components/Couple/Couple";
import Events from "./Components/Events/Events";
import Countdown from "./Components/Countdown/Countdown";
import Gallery from "./Components/Gallery/Gallery";
import RSVP from "./Components/RSVP/RSVP";
import MusicPlayer from "./Components/MusicPlayer/MusicPlayer";
import Footer from "./Components/Footer/Footer";

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