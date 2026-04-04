import React from "react";
import { Link } from "react-router-dom";

export default function ProjectList({ projects }) {
  return (
    <div className="projects-list">
      {projects.map((project, i) => (
        <Link key={i} to={project.link} className="project-row">
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              className="project-image"
            />
          )}
          <div className="project-content">
            <h2 className="project-title">{project.title}</h2>
            <p className="project-meta">{project.meta}</p>
            <p className="project-description">{project.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}