import React from "react";

export default function Hero() {
  return (
    <section style={{ padding: "20px 0px"}}>
      <h1>
        hi, i’m alexa!
      </h1>

      <h2>
        user experience designer{" "}
       <span className="smaller-text">& engineer ;)</span>
      </h2>


      <p style={{maxWidth: "650px"}}>
        I guess you could call me a creative developer. I use my background in computer science to create designs that look good and work even better.
      </p>
    </section>
  );
}