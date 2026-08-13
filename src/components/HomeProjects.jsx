import React from "react";
import ProjectList from "./ProjectList";
import { homeProjects } from "../data/projects";

export default function HomeProjects() {
  return (
    <section id="home-projects" style={{ padding: "80px 20px" }}>
      <ProjectList projects={homeProjects} />
    </section>
  );
}