
import { useEffect, useState } from "react";
import "./Countdown.css";

function Countdown() {
  const weddingDate = new Date("2026-09-12T16:30:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),

      hours: Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      ),

      minutes: Math.floor(
        (difference / (1000 * 60)) % 60
      ),

      seconds: Math.floor(
        (difference / 1000) % 60
      ),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown">

      <div className="countdown-container">

        <h2 className="countdown-title">
          We Can't Wait
        </h2>

        <p className="countdown-subtitle">
          Counting every moment until our special day
        </p>

        <div className="countdown-boxes">
          <div className="count-box">
            <h3>
              {String(timeLeft.days).padStart(2, "0")}
            </h3>

            <span>
              Days
            </span>
          </div>


          <div className="count-box">
            <h3>
              {String(timeLeft.hours).padStart(2, "0")}
            </h3>

            <span>
              Hours
            </span>
          </div>

    
          <div className="count-box">
            <h3>
              {String(timeLeft.minutes).padStart(2, "0")}
            </h3>

            <span>
              Minutes
            </span>
          </div>


          <div className="count-box">
            <h3>
              {String(timeLeft.seconds).padStart(2, "0")}
            </h3>

            <span>
              Seconds
            </span>
          </div>

        </div>

        <div className="countdown-divider">
          <span>
            ♡
          </span>
        </div>

        <p className="countdown-message">
          Join us as we begin our beautiful journey together
        </p>

      </div>

    </section>
  );
}

export default Countdown;