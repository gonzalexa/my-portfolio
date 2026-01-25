import React from "react";
import ProjectCard from "./ProjectCard.jsx";

import fbmarket from "../images/fbmarket.png";

const homeProjects = [
  {
    title: "Meta",
    description: "Facebook Marketplace for YA's",
    image: fbmarket,
  },
  {
    title: "JPMorganChase",
    description: "Confluence reskin",
    image: "/images/project2.jpg",
  },
  {
    title: "JPMorganChase",
    description: "Case management tool home page.",
    image: "/images/project3.jpg",
  },
  {
    title: "University of Florida",
    description: "Senior project",
    image: "/images/project4.jpg",
  },
];

export default function HomeProjects() {
  return (
    <section
      style={{
        padding: "80px 20px",
      }}
    >
      <h2 style={{ marginBottom: "40px", textAlign: "left" }}>
        check out my projects
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:  "repeat(2, 1f)", // 2 columns
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