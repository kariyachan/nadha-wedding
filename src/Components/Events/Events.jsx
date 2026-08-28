import "./Events.css";
import { FaMosque, FaMapMarkerAlt } from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";

import wakingVideo from "../../assets/waking2.mp4";

function Events() {
 
  const nikahLocation = "https://maps.app.goo.gl/G9v5VB5T5WgGFQsU6";

  const receptionLocation = "https://maps.app.goo.gl/5moGdkA1ts7R2r5Z6";

  return (
    <section className="events">

      <video
        className="events-video"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      >
        <source src={wakingVideo} type="video/mp4" />
      </video>

      <div className="events-overlay"></div>

      <div className="events-container">

        <h2 className="events-title">
          Wedding Events
        </h2>

        <p className="events-subtitle">
          We are delighted to invite you to celebrate
          <br />
          our most precious moments.
        </p>

        <div className="event-cards">

          <div className="event-card">

            <div className="event-icon">
              <FaMosque />
            </div>

            <h3>
              Nikah
            </h3>

            <p className="event-date">
              12 September 2026
            </p>

            <p className="event-day">
              Saturday
            </p>

            <p className="event-time">
              04:30 PM
            </p>

            <div className="venue">

              <h4>
                Venue
              </h4>

              <p className="venue-name">
                Groom's Residence
              </p>

            </div>

            <a
              href={nikahLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              <FaMapMarkerAlt />
              View Location
            </a>

          </div>

          <div className="event-card">

            <div className="event-icon">
              <GiLinkedRings />
            </div>

            <h3>
              Reception
            </h3>

            <p className="event-date">
              13 September 2026
            </p>

            <p className="event-day">
              Sunday
            </p>

            <p className="event-time">
              04:30 PM
            </p>

            <div className="venue">

              <h4>
                Venue
              </h4>

              <p className="venue-name">
                Bride's Residence
              </p>

            </div>

            <a
              href={receptionLocation}
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              <FaMapMarkerAlt />
              View Location
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Events;