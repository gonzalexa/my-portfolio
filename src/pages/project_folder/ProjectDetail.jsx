import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectDetail({
  title,
  subtitle,
  overview,
  problem,
  approach,
  impact,
  outcomes = [],
}) {
  return (
    <section style={{ maxWidth: "1100px", margin: "120px auto 80px", padding: "0 24px" }}>
      <Link
        to="/projects"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          color: "#1B365D",
          textDecoration: "none",
          fontWeight: 500,
          marginBottom: "24px",
        }}
      >
        <ArrowLeft size={16} />
        Back to work
      </Link>

      <div style={{ marginBottom: "32px" }}>
        <p style={{ margin: 0, fontSize: "14px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73" }}>
          Case study
        </p>
        <h1 style={{ margin: "12px 0 8px", fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#1B365D" }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ margin: 0, fontSize: "1.1rem", color: "#4f4f56" }}>{subtitle}</p>
        )}
      </div>

      <div style={{ display: "grid", gap: "28px", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}>
        <div style={{ background: "#f5f7fa", padding: "24px", borderRadius: "18px" }}>
          <h2 style={{ marginBottom: "12px", fontSize: "1.2rem", color: "#1B365D" }}>Overview</h2>
          <p style={{ margin: 0, color: "#3d3d42", lineHeight: 1.7 }}>{overview}</p>
        </div>

        <div style={{ background: "#f5f7fa", padding: "24px", borderRadius: "18px" }}>
          <h2 style={{ marginBottom: "12px", fontSize: "1.2rem", color: "#1B365D" }}>Problem</h2>
          <p style={{ margin: 0, color: "#3d3d42", lineHeight: 1.7 }}>{problem}</p>
        </div>
      </div>

      <div style={{ marginTop: "32px", background: "#ffffff", border: "1px solid #e8edf3", borderRadius: "18px", padding: "28px" }}>
        <h2 style={{ marginBottom: "14px", color: "#1B365D" }}>Approach</h2>
        <p style={{ color: "#3d3d42", lineHeight: 1.8, margin: 0 }}>{approach}</p>
      </div>

      {outcomes.length > 0 && (
        <div style={{ marginTop: "32px" }}>
          <h2 style={{ marginBottom: "16px", color: "#1B365D" }}>Key outcomes</h2>
          <ul style={{ paddingLeft: "20px", color: "#3d3d42", lineHeight: 1.8 }}>
            {outcomes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {impact && (
        <div style={{ marginTop: "32px", background: "linear-gradient(135deg, #dfeefb 0%, #f5f7fa 100%)", borderRadius: "18px", padding: "28px" }}>
          <h2 style={{ marginBottom: "12px", color: "#1B365D" }}>Impact</h2>
          <p style={{ margin: 0, color: "#2f2f34", lineHeight: 1.8 }}>{impact}</p>
        </div>
      )}
    </section>
  );
}
