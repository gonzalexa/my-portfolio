import React from "react";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const projects = [
    { title: "Project One", description: "My first project." },
    { title: "Project Two", description: "My second project." }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {projects.map((p, i) => (
          <ProjectCard key={i} title={p.title} description={p.description} />
        ))}
      </div>
    </section>
  );
}