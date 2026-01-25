import React from "react";

export default function ProjectCard({ title, description, image, style }) {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        ...style, // apply margins/padding from parent
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {image && (
<img
  src={image}
  alt={title}
  style={{
    width: "100%",
    height: "400px", // taller image → more of it visible
    objectFit: "cover",
    display: "block",
  }}
/>
      )}
      <div style={{ padding: "16px" }}>
        <h3
          style={{
            marginBottom: "8px",
            fontWeight: "400",     // not bold
            color: "#888888",      // grayish
            fontSize: "18px",
          }}
        >
          {title}
        </h3>
        <p
          style={{
            margin: 0,
            fontWeight: "400",     // not bold
            color: "#000000",      // black
            fontSize: "16px",
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}