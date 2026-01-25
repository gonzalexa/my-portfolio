import React from "react";
import ProjectCard from "./ProjectCard.jsx";

import fbmarket from "../images/fbmarket.jpg";
import confluence from "../images/confluence.png";
import cc from "../images/cc.png";

const homeProjects = [
  {
    title: "University of Florida",
    description: "A digital cookbook platform where users can find and share recipes",
    image: cc,
  },
  {
    title: "JPMorganChase",
    description: "Case management tool home page.",
    //image: "/images/project3.jpg",
  },
  {
    title: "JPMorganChase",
    description: "Developed a branded confluence site for a service within JPMC",
   image: confluence,
  },
  {
    title: "Meta",
    description: "Boosting trust in Facebook Marketplace for young adults",
    image: fbmarket,
  },
];

export default function HomeProjects() {
  return (
    <section
      style={{
        padding: "80px 20px",
      }}
    >

      <div
        style={{
          display: "grid",
          gridTemplateColumns:  "repeat(2, 1fr)", // 2 columns
          gap: "24px"
        }}
      >
        {homeProjects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} image={p.image} />
        ))}
      </div>
    </section>
  );
}