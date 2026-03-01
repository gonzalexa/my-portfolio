import React from "react";
import "./Projects.css";

import cc from "../images/cc.png";

const fullProjects = [
  {
    title: "Cuisine Compass",
    meta: "Lorem • Lorem",
    description: "A digital cookbook platform where users can find and share recipes",
    image: cc,
    link: "#"
  },

    {
    title: "JPMorganChase",
    meta: "Lorem • Lorem",
    description: "A digital cookbook platform where users can find and share recipes",
  },

    {
    title: "JPMorganChase",
    meta: "Lorem • Lorem",
    description: "A digital cookbook platform where users can find and share recipes",
  },

    {
    title: "Meta",
    meta: "Lorem • Lorem",
    description: "A digital cookbook platform where users can find and share recipes",
  }
];

export default function ProjectsPage() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Work</h1>

      <div className="projects-list">
        {fullProjects.map((project, i) => (
          <a key={i} href={project.link} className="project-row">
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />

            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-meta">{project.meta}</p>
              <p className="project-description">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}