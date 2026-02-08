import React, { useState, useEffect } from "react";
import "./About.css";

import image1 from "../images/graduation.JPG";
import image2 from "../images/half.jpg";
import image3 from "../images/sunflowers.JPG";
import image4 from "../images/sunset.jpg";
import image5 from "../images/travel.jpg";

export default function About() {
  const images = [image1, image2, image3, image4, image5];
  const [current, setCurrent] = useState(0);

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goTo = (index) => setCurrent(index);

  return (
    <section id="about" className="about">
      <div className="about-container">
        {/* LEFT: TEXT */}
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            My mom is an artist, my dad an engineer, and I like to think I inherited the best of both worlds. That mix of imagination and problem-solving has shaped the way I approach both design and development, always aiming for thoughtful, user-centered solutions.
          </p>

          <p>Outside of my work:</p>

          <ul>
            <li>I absolutely love to travel; whether it’s solo, with friends, or with family</li>
            <li>I recently ran a half marathon with my cousin. One and done I think.</li>
            <li>Sunsets and sunflowers are two things that always make me smile.</li>
          </ul>

          <p>
            Thank you for stopping by to learn more about me.
          </p>
        </div>

        {/* RIGHT: IMAGE CAROUSEL */}
        <div className="about-carousel">
          <div className="carousel-images">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Slide ${i + 1}`}
                className={`carousel-image ${i === current ? "active" : ""}`}
              />
            ))}
          </div>

          {/* Dots below images */}
          <div className="dots">
            {images.map((_, i) => (
              <span
                key={i}
                className={`dot ${current === i ? "active" : ""}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}