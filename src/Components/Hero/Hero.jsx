import "./Hero.css";
import backgroundImage from "../../assets/NS.png";

function Hero() {
  return (
    <section className="hero">
      
      <img
        src={backgroundImage}
        alt=""
        className="hero-background"
      />

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="family">
          With the blessings of our families
        </p>

        <h1 className="bride">
          Nadha
        </h1>

        <div className="heart">
          ♥
        </div>

        <h1 className="groom">
          Shammas
        </h1>

        <div className="divider"></div>

        <p className="invite">
          Together with our families,
          we invite you to celebrate
          our beautiful beginning.
        </p>

        <p className="date">
          12 • 13 September 2026
        </p>

      </div>

    </section>
  );
}

export default Hero;









































































































































































































































































// import "./Hero.css";
// import { FaHeart } from "react-icons/fa";
// import { HiSpeakerWave } from "react-icons/hi2";

// function Hero() {
//   return (
//     <section className="hero">

//       {/* Background overlay */}
//       <div className="hero-overlay"></div>

//       {/* Hero Content */}
//       <div className="hero-content">

//         <p className="family">
//           Together with their families
//         </p>

//         <h1 className="bride">
//           Nadha
//         </h1>

//         <FaHeart className="heart" />

//         <h1 className="groom">
//           Shammas
//         </h1>

//         <div className="divider"></div>

//         <p className="invite">
//           Request the honour of your presence
//           <br />
//           as we celebrate our wedding.
//         </p>

//         <p className="date">
//           12 • 13 September 2026
//         </p>

//       </div>

//       {/* Music Button */}
//       <button className="music">
//         <HiSpeakerWave />
//       </button>

//     </section>
//   );
// }

// export default Hero;