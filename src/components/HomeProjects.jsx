import React from "react";
import ProjectCard from "./ProjectCard.jsx";
import { Link } from "react-router-dom";


import fbmarket from "../images/fbmarket.jpg";
import confluence from "../images/confluence.png";
import cc from "../images/cc.png";

const homeProjects = [
  {
    title: "University of Florida",
    description: "A digital cookbook platform where users can find and share recipes",
    image: cc,
    link: "/project_folder/cuisine-compass"
  },
  {
    title: "JPMorganChase",
    description: "Case management tool home page.",
    //image: "/images/project3.jpg",
    link: "/project_folder/jpmorgan-case"
  },
  {
    title: "JPMorganChase",
    description: "Developed a branded confluence site for a service within JPMC",
   image: confluence,
   link: "/project_folder/jpmorgan-case"
  },
  {
    title: "Meta",
    description: "Boosting trust in Facebook Marketplace for young adults",
    image: fbmarket,
    link: "/project_folder/jpmorgan-case"
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
          display: "flex",
          flexDirection: "column",
          gap: "100px"
        }}
      >
        {homeProjects.map((p, i) => (
          <Link
            key={i}
            to={p.link}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ProjectCard
              title={p.title}
              description={p.description}
              image={p.image}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}