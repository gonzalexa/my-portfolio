import React from "react";

const fullProjects = [
  {
    title: "Project One",
    description: "Full breakdown with images and more info.",
    imageUrl: "/images/project1.png",
    link: "#"
  },
  {
    title: "Project Two",
    description: "Details of my second project.",
    imageUrl: "/images/project2.png",
    link: "#"
  },
  // add more projects
];

export default function ProjectsPage() {
  return (
    <section style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>Projects</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "32px"
      }}>
        {fullProjects.map((project, i) => (
          <a
            key={i}
            href={project.link}
            style={{
              display: "flex",
              flexDirection: "column",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              style={{ width: "100%", height: "220px", objectFit: "cover" }}
            />
            <div style={{ padding: "20px" }}>
              <h3 style={{ marginBottom: "10px" }}>{project.title}</h3>
              <p style={{ color: "#555" }}>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}