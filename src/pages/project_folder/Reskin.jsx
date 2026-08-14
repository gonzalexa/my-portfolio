import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function ReskinPage() {
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
          Confluence Reskin • Design Development Program
        </p>
        <h1 style={{ margin: "16px 0 12px", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", lineHeight: 1, color: "#1d2a36" }}>
          Reskin: branding a Confluence site for product transparency
        </h1>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#4f5965", maxWidth: "760px" }}>
          Built a branded Confluence site to centralize product updates, status, and communications for a corporate service — improving discoverability and clarity for cross-functional teams.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginBottom: "42px" }}>
        <div style={{ background: "#f5f7fa", borderRadius: "18px", padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Role</p>
          <p style={{ marginTop: "10px", color: "#2c3742" }}>Design Development Analyst — Design Development Program</p>
        </div>

        <div style={{ background: "#f5f7fa", borderRadius: "18px", padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Project</p>
          <p style={{ marginTop: "10px", color: "#2c3742" }}>Create a business-line branded Confluence site to centralize product updates, newsletters, and progress statuses.</p>
        </div>

        <div style={{ background: "#f5f7fa", borderRadius: "18px", padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Impact</p>
          <p style={{ marginTop: "10px", color: "#2c3742" }}>Everyone working on or interested in the service — improves transparency and ease of finding updates.</p>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px", marginBottom: "36px" }}>
        <div style={{ background: "#ffffff", borderRadius: "20px", padding: "28px", border: "1px solid rgba(29,42,54,0.06)" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Overview</p>
          <p style={{ marginTop: "16px", lineHeight: 1.8, color: "#273640" }}>
            I developed a branded Confluence site per a director’s request to create a one-stop hub for product updates, progress statuses, and newsletters. The goal was to replace the default, cluttered Confluence interface with a standardized, navigable, and visually cohesive site that teams could rely on for accurate status and communications.
          </p>
        </div>

        <div style={{ background: "#f7f3ee", borderRadius: "20px", padding: "28px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Why it mattered</p>
          <p style={{ marginTop: "16px", lineHeight: 1.7, color: "#2f3b45" }}>
            Centralizing product information was critical for transparency, enabling straightforward navigation, and making updates easier to publish and consume — reducing time spent hunting through nested content.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Pain points</p>
        <div style={{ marginTop: "18px", background: "#ffffff", border: "1px solid rgba(29,42,54,0.08)", borderRadius: "20px", padding: "24px" }}>
          <ul style={{ margin: 0, color: "#2f3b45", lineHeight: 1.8 }}>
            <li>Convoluted structure with too much nested content</li>
            <li>Lack of standardized layout and visual hierarchy</li>
            <li>Information was hard to find and update</li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Design & implementation</p>
        <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "28px" }}>
          <p style={{ margin: 0, color: "#2f3b45", lineHeight: 1.8 }}>
            I learned how to author CSS for Confluence for the first time: linking CSS macros, adapting an internal site template, and building header and side navigation components. I created a logo from scratch, adjusted header and side-nav colors to match the brand, and made the layout responsive so components adapt to window size. Finally, I cleaned spacing, rich text styles, and implemented content across pages.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Challenges & notes</p>
        <div style={{ marginTop: "18px", background: "#ffffff", borderRadius: "20px", padding: "24px", border: "1px solid rgba(29,42,54,0.06)" }}>
          <p style={{ margin: 0, color: "#2f3b45", lineHeight: 1.8 }}>
            I had to learn CSS within Confluence quickly and consult with teammates and documentation. There were a few missteps while modifying colors and responsive code, but iterative testing and feedback helped stabilize the site. The project reinforced the value of patience and thorough review cycles for design sign-off.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px", background: "linear-gradient(135deg, #eaf4ff 0%, #f7f3ee 100%)", borderRadius: "20px", padding: "28px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Conclusion & learnings</p>
        <p style={{ marginTop: "16px", color: "#2f3b45", lineHeight: 1.8 }}>
          I learned how Confluence CSS works, improved my CSS skills, and gained a realistic sense of design review timelines (especially logo approval). To ensure continuity, I created a "Confluence How-To" step-by-step guide so future contributors can reproduce and extend the reskin easily — which I later used myself when working full-time.
        </p>
      </div>

      <div style={{ background: "#1d2a36", borderRadius: "20px", padding: "28px", color: "#f7f8fa" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#dfeaf3", fontWeight: 700 }}>Next steps</p>
        <p style={{ marginTop: "16px", lineHeight: 1.8, color: "#edf4fb", marginBottom: 0 }}>
          Continue to refine the template, expand documentation, and onboard others with the Confluence How-To guide. Track improvements in update frequency and reduced time-to-find as success metrics for the reskin.
        </p>
      </div>
      
        <div style={{ marginTop: "36px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
            Photos of my summer
          </p>
          <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "28px", textAlign: "center", color: "#6e6e73" }}>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
              Coming soon — photos and memories from the reskin work.
            </p>
          </div>
        </div>
    </section>
  );
}
