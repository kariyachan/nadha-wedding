import { useEffect, useRef } from "react";
import "./Footer.css";
import { FaHeart } from "react-icons/fa";
import flowerVideo from "../../assets/hands.mp4";

function Footer() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    if (!card) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          card.classList.add("footer-card-show");
          observer.unobserve(card);
        }
      },
      {
        threshold: 0.25,
      }
    );

    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="footer">

      <video
        className="footer-video"
        src={flowerVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      <div className="footer-overlay"></div>

      <section className="footer-section">

        <div
          ref={cardRef}
          className="footer-card"
        >


          <div className="footer-ornament">
            <span></span>

            <FaHeart />

            <span></span>
          </div>

          <p className="footer-small">
            WITH ALL OUR HEARTS
          </p>

          <h2 className="footer-title">
            Thank you
          </h2>

          <p className="footer-script">
            for being part of our story
          </p>

          <div className="footer-divider"></div>

          <p className="footer-message">
            Your presence made our day
            even more beautiful.
          </p>

          <FaHeart className="footer-heart" />

        </div>

      </section>

    </footer>
  );
}

export default Footer;