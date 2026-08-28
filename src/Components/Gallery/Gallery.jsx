import { useEffect, useState } from "react";
import "./Gallery.css";

import photo1 from "../../assets/handsNS.png";
import photo2 from "../../assets/sea.png";
import photo3 from "../../assets/NS.png";
import photo4 from "../../assets/bluebg.png";

function Gallery() {
  const photos = [photo1, photo2, photo3, photo4];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % photos.length);
    }, 2000);

    return () => clearInterval(timer);
  }, [photos.length]);

  return (
    <section className="gallery">

      <div className="gallery-container">

        <h2 className="gallery-title">
          Our Memories
        </h2>

        <p className="gallery-subtitle">
          A collection of beautiful moments we cherish forever.
        </p>

        <div className="gallery-slider">

          <img
            src={photos[currentImage]}
            alt={`Nadha and Shammas memory ${currentImage + 1}`}
            className="gallery-image"
          />

        </div>
        
        <div className="gallery-dots">

          {photos.map((_, index) => (
            <span
              key={index}
              className={`gallery-dot ${
                currentImage === index ? "active" : ""
              }`}
            ></span>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Gallery;