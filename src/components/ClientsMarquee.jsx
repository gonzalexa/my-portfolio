import React from "react";
import Marquee from "react-fast-marquee";

import jpmcLogo from "../images/jpmc.svg";
import metaLogo from "../images/meta.png";
import ufLogo from "../images/uf.png";

const logos = [jpmcLogo, metaLogo, ufLogo];

export default function ClientsMarquee() {
  return (
    <div style={{ textAlign: "center", margin: "48px auto", maxWidth: "800px", overflow: "hidden" }}>
      <p style={{ marginBottom: "15px", fontWeight: "500", fontSize: "15px" }}>
        Experience designing for
      </p>

      <Marquee gradient={false} speed={50}>
        {logos.map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Client logo"
            style={{ marginRight: "48px", height: "40px" }}
          />
        ))}
      </Marquee>
    </div>
  );
}