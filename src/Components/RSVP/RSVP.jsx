import { useState } from "react";
import { FaHeart, FaCheck, FaTimes } from "react-icons/fa";
import "./RSVP.css";

function RSVP() {
  const [name, setName] = useState("");
  const [attendance, setAttendance] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbykH4pgJbyb54wB3dDc2qoDo2Qi76qn4SSHOJlQkwFn3CsmlHrcj6Dy6gvAsrSGzCWUlw/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name ❤️");
      return;
    }

    if (!attendance) {
      alert("Please select your attendance ❤️");
      return;
    }

    setLoading(true);

    const formData = new URLSearchParams();

    formData.append("name", name);
    formData.append("attendance", attendance);

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      setSubmitted(true);

      setName("");
      setAttendance("");
    } catch (error) {
      console.error("RSVP Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="rsvp">
        <div className="rsvp-container">

          <div className="rsvp-success">

            <div className="success-heart">
              <FaHeart />
            </div>

            <span className="success-small">
              THANK YOU
            </span>

            <h2>
              Your RSVP
              <br />
              Has Been Received
            </h2>

            <p>
              Thank you for letting us know.
              <br />
              We can't wait to celebrate
              <br />
              this beautiful day with you.
            </p>

            <div className="success-divider">
              ♡
            </div>

            <h3>
              Nadha & Shammas
            </h3>

            <span className="success-date">
              12 • 13 September 2026
            </span>

            <button
              className="another-response"
              onClick={() => setSubmitted(false)}
            >
              Submit another response
            </button>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="rsvp">

      <div className="rsvp-container">

        <span className="rsvp-small-title">
          KINDLY RESPOND
        </span>

        <h6 className="rsvp-title">
          Your Presence Is Our Joy
        </h6>

        <p className="rsvp-subtitle">
          Will you be joining us?
        </p>

        <div className="rsvp-card">

          <div className="top-heart">
            <FaHeart />
          </div>

          <h3>
            We would love to celebrate
            <br />
            with you
          </h3>

          <form onSubmit={handleSubmit}>

            <div className="form-group">

              <label>
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

            </div>

            <div className="form-group">

              <label>
                Will you be attending?
              </label>

              <div className="attendance-options">

                <button
                  type="button"
                  className={`attendance-btn ${
                    attendance === "Yes"
                      ? "selected yes-selected"
                      : ""
                  }`}
                  onClick={() => setAttendance("Yes")}
                >
                  <FaCheck />
                  Yes, I'll be there
                </button>

                <button
                  type="button"
                  className={`attendance-btn ${
                    attendance === "No"
                      ? "selected no-selected"
                      : ""
                  }`}
                  onClick={() => setAttendance("No")}
                >
                  <FaTimes />
                  Sorry, I can't make it
                </button>

              </div>

            </div>

            <button
              type="submit"
              className="submit-rsvp"
              disabled={loading}
            >
              <FaHeart />

              {loading
                ? "Sending..."
                : "Confirm My RSVP"}
            </button>

          </form>

          <p className="rsvp-footer">
            We look forward to celebrating
            <br />
            with you ❤️
          </p>

        </div>

      </div>

    </section>
  );
}

export default RSVP;