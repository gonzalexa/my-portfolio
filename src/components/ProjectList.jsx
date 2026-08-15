import React from "react";
import { Link } from "react-router-dom";
import "./ProjectList.css";
import openLaptop from "../images/open laptop.jpg";

export default function ProjectList({ projects, variant }) {
  return (
    <div className={`projects-list ${variant === "pills" ? "pills" : ""}`}>
      {projects.map((project, i) => {
        const isFirstVisual = variant === "pills" && i === 0;
        return (
          <Link
            key={i}
            to={project.link}
            className={`project-row ${variant === "pills" ? "pill" : ""} ${
              isFirstVisual ? "with-visual" : ""
            }`}
          >
            {/* For pills: we no longer show the top-left logo; content stacks vertically.
                For the very first item (`isFirstVisual`) render a right-side laptop visual. */}

            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-meta">{project.meta}</p>
              <p className="project-description">{project.description}</p>
            </div>

            {isFirstVisual && (
              <div className="project-visual laptop">
                  <div className="laptop-frame">
                    <img src={openLaptop} alt="open laptop" className="laptop-bg" />
                    {project.image && (
                      <img
                        src={project.image}
                        alt={`${project.title} logo`}
                        className="laptop-logo"
                      />
                    )}
                  </div>
                </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}