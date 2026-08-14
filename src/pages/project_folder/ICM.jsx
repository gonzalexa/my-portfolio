import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ICMPage() {
  return (
    <section style={{ maxWidth: "1180px", margin: "120px auto 80px", padding: "0 24px" }}>
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

      <div style={{ borderBottom: "1px solid rgba(29,42,54,0.1)", paddingBottom: "32px", marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          ICM • Design Development Program
        </p>
        <h1 style={{ margin: "16px 0 12px", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", lineHeight: 1, color: "#1d2a36" }}>
          Redesigning the ICM homepage for clarity and action
        </h1>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#4f5965", maxWidth: "760px" }}>
          Objective: explore opportunities for the ICM homepage to surface useful information, increase discoverability, and drive users into high-value actions.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginBottom: "42px" }}>
        <div style={{ background: "#f5f7fa", borderRadius: "18px", padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Role</p>
          <p style={{ marginTop: "10px", color: "#2c3742" }}>Design Development Analyst — Design Development Program</p>
        </div>

        <div style={{ background: "#f5f7fa", borderRadius: "18px", padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Project</p>
          <p style={{ marginTop: "10px", color: "#2c3742" }}>Design the homepage for an internal case management tool focused on financial crimes investigations.</p>
        </div>

        <div style={{ background: "#f5f7fa", borderRadius: "18px", padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Impact</p>
          <p style={{ marginTop: "10px", color: "#2c3742" }}>Investigators, reviewers, and stakeholders who rely on ICM for case updates and transparency.</p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Team</p>
        <div style={{ marginTop: "18px", background: "#ffffff", border: "1px solid rgba(29,42,54,0.08)", borderRadius: "20px", padding: "20px" }}>
          <p style={{ margin: 0, color: "#2f3b45", lineHeight: 1.7 }}>Alexa Gonzalez — Designer</p>
          <p style={{ marginTop: "8px", color: "#2f3b45", lineHeight: 1.7 }}>Mila Filipof — Researcher</p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Research</p>
        <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "28px" }}>
          <p style={{ lineHeight: 1.8, color: "#2f3b45", margin: 0 }}>
            We started with discovery: stakeholder interviews, four 60-minute user workshops on Lucid, and synthesis sessions. Context: the ICM tool is an internally-built case tool for financial crimes (replacing a third-party vendor). The current homepage lacked hierarchy and useful info — users commonly skipped it and went straight into cases. Research asked: what homepage information would increase traffic and usefulness?
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Design</p>
        <div style={{ marginTop: "18px", background: "#ffffff", border: "1px solid rgba(29,42,54,0.08)", borderRadius: "20px", padding: "28px" }}>
          <p style={{ lineHeight: 1.8, color: "#2f3b45", margin: 0 }}>
            I created wireframe explorations focused on an investigator view (project scope limited to one persona). Key constraints included multiple user groups with varying needs and the requirement to make the homepage helpful without overwhelming users. Designs emphasized customizable sections, clear hierarchy for case updates, and quick entry points to critical workflows.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Conclusion</p>
        <div style={{ marginTop: "18px", background: "linear-gradient(135deg, #eaf4ff 0%, #f7f3ee 100%)", borderRadius: "20px", padding: "28px" }}>
          <p style={{ lineHeight: 1.8, color: "#2f3b45", margin: 0 }}>
            The explorations showed clear opportunities to surface meaningful signals on the homepage that reduce the need for users to jump straight into cases. The work highlighted trade-offs between persona coverage and clarity; focusing on one persona allowed for more decisive patterns and clearer entry points.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>What I learned</p>
        <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "28px" }}>
          <p style={{ lineHeight: 1.8, color: "#2f3b45", margin: 0 }}>
            I learned how to run structured discovery workshops, synthesize stakeholder and user feedback, and translate research into targeted homepage concepts. I also learned how to prioritize a single persona when scope is limited and why customization is important for broad user bases.
          </p>
        </div>
      </div>

      <div style={{ background: "#1d2a36", borderRadius: "20px", padding: "28px", color: "#f7f8fa", marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#dfeaf3", fontWeight: 700 }}>Next steps</p>
        <p style={{ marginTop: "16px", lineHeight: 1.8, color: "#edf4fb", marginBottom: 0 }}>
          Collect additional insights across all product areas, run usability testing on prototypes with investigators, and collaborate with engineering to begin phased implementation of prioritized homepage components.
        </p>
      </div>

      <div>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          Photos of my summer
        </p>
        <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "28px", textAlign: "center", color: "#6e6e73" }}>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Coming soon — photos and notes from the ICM discovery and design work.
          </p>
        </div>
      </div>
    </section>
  );
}
