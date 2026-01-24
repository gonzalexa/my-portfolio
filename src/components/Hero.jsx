import React from "react";

export default function Hero() {
  return (
    <section>
      <h1>
        hi, i’m alexa!
        <br />
        user experience designer{" "}
        <span className="smaller-text">& engineer ;)</span>
      </h1>

      <p style={{marginTop: "24px", maxWidth: "650px"}}>
        I guess you could call me a creative developer. I use my background in
        computer science to create designs that look good and work even better.
      </p>
    </section>
  );
}