import "./Couple.css";
import engagementImage from "../../assets/nasa.png";

function Couple() {
  return (
    <section className="couple">

      <div className="couple-container">

        <h2 className="couple-heading">
          Our Beautiful Beginning
        </h2>

        <div className="engagement-photo">
          <img
            src={engagementImage}
            alt="Nadha and Shammas"
          />
        </div>

        <h2 className="couple-names">
          Nadha & Shammas
        </h2>

      </div>

    </section>
  );
}

export default Couple;