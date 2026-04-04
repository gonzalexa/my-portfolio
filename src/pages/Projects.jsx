import React from "react";
import "./Projects.css";
import ProjectList from "../components/ProjectList";
import { fullProjects } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section className="projects-section">
      <h1 className="projects-title">Work</h1>
      <ProjectList projects={fullProjects} />
    </section>
  );
}