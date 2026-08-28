import "./IslamicInvitation.css";

function IslamicInvitation() {
  return (
    <section className="islamic">

      <div className="islamic-container">

        <h2 className="arabic">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h2>

        <p className="translation">
          In the name of Allah, the Most Gracious,
          the Most Merciful
        </p>

        <div className="divider"></div>

        <p className="intro">
          With the blessings of Almighty Allah,
          together with our beloved families,
          we joyfully invite you to celebrate
          the beginning of our new journey.
        </p>

        <div className="family-section">

          <div className="family-card">

            <h3>Bride</h3>

            <h4>Nada Abdul Azeez</h4>

            <p>Daughter of</p>

            <h5>Abdul Azeez</h5>

            <span>&</span>

            <h5>Subaida azeez</h5>

          </div>

          <div className="family-card">

            <h3>Groom</h3>

            <h4> Muhammed Shammas</h4>

            <p>Son of</p>

            <h5>Faisal</h5>

            <span>&</span>

            <h5>Aysha</h5>

          </div>

        </div>

        <div className="dua">

          <p>
            "May Allah bless this marriage,
            shower His mercy upon us,
            and unite our hearts forever."
          </p>

        </div>

      </div>

    </section>
  );
}

export default IslamicInvitation;