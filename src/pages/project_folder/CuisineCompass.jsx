import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CuisineCompassPage() {
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
          Cuisine Compass • Food Scientists
        </p>
        <h1 style={{ margin: "16px 0 12px", fontSize: "clamp(2.2rem, 5vw, 3.4rem)", lineHeight: 1, color: "#1d2a36" }}>
          Cuisine Compass — a digital cookbook for nutritious, affordable cooking
        </h1>
        <p style={{ margin: 0, fontSize: "1.05rem", color: "#4f5965", maxWidth: "820px" }}>
          A community-driven recipe platform that helps students and budget-conscious cooks find nutritious, affordable meals, track macronutrients, and build collections for everyday cooking.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "18px", marginBottom: "42px" }}>
        <div style={{ background: "#f5f7fa", borderRadius: "18px", padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Keywords</p>
          <p style={{ marginTop: "10px", color: "#2c3742" }}>React, Vite, Supabase, CI/CD, nutrition, web dev</p>
        </div>

        <div style={{ background: "#f5f7fa", borderRadius: "18px", padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Project</p>
          <p style={{ marginTop: "10px", color: "#2c3742" }}>Community recipe sharing, nutrition tracker, grocery lists, and collections.</p>
        </div>

        <div style={{ background: "#f5f7fa", borderRadius: "18px", padding: "18px 20px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Link</p>
          <p style={{ marginTop: "10px", color: "#2c3742" }}><a href="https://youtu.be/YHTHDySjL5s" target="_blank" rel="noopener noreferrer">Demo video</a></p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Project overview</p>
        <div style={{ marginTop: "18px", background: "#ffffff", border: "1px solid rgba(29,42,54,0.08)", borderRadius: "20px", padding: "28px" }}>
          <p style={{ lineHeight: 1.8, color: "#2f3b45", margin: 0 }}>
            Cuisine Compass helps students and tight-budget cooks find nutritious, affordable meals using community-sourced recipes. It includes a recipe grid, profile pages, collections, grocery lists, and a macronutrient tracker to support healthier cooking and meal planning.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Goals & scope</p>
        <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "20px" }}>
          <p style={{ margin: 0, color: "#2f3b45", lineHeight: 1.7 }}>
            Goals: build community recipe sharing, track nutrition, and create accessible tools for budget-conscious cooks. Scope: recipe grid, profile, grocery list, collections, and nutrition tracker.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Team & responsibilities</p>
        <div style={{ marginTop: "18px", background: "#ffffff", border: "1px solid rgba(29,42,54,0.08)", borderRadius: "20px", padding: "20px" }}>
          <ul style={{ color: "#2f3b45", lineHeight: 1.8 }}>
            <li><strong>Sydney Aurelius</strong> — Project Manager, onboarding, profile flows</li>
            <li><strong>Julia Chancey</strong> — Explore, About, Nutrient Tracker</li>
            <li><strong>Camryn Cimber</strong> — Allergies, Goals, Collections, schema</li>
            <li><strong>Alexa Gonzalez</strong> — Competitive analysis, logo, Create Recipe, frontend work</li>
            <li><strong>Julien Ubico</strong> — Backend, Supabase integration</li>
            <li><strong>Advisor</strong> — Jeanette M. Andrade, Department of Food Science & Human Nutrition</li>
          </ul>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Technical details</p>
        <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "20px" }}>
          <p style={{ margin: 0, color: "#2f3b45", lineHeight: 1.7 }}>
            Stack: Vite + React, Node.js backend, Supabase for auth, database, and storage. CI/CD via CircleCI and deployment on Cloudflare Pages. Key libraries: React Router, Tailwind, React Icons.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Deliverables & testing</p>
        <div style={{ marginTop: "18px", background: "#ffffff", border: "1px solid rgba(29,42,54,0.08)", borderRadius: "20px", padding: "20px" }}>
          <p style={{ margin: 0, color: "#2f3b45", lineHeight: 1.7 }}>
            Deliverables: presentations, live demo, GitHub repo, CI tests. Testing used Vitest for component and route rendering, and CircleCI to run build+tests for PRs.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px", background: "linear-gradient(135deg, #eaf4ff 0%, #f7f3ee 100%)", borderRadius: "20px", padding: "28px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>What I learned</p>
        <p style={{ marginTop: "16px", color: "#2f3b45", lineHeight: 1.8 }}>
          Working on Cuisine Compass reinforced cross-functional teamwork, end-to-end feature development, and the importance of designing with users' time and budget constraints in mind. I gained experience in linking design work to production code and coordinating with backend infrastructure (Supabase) and CI/CD pipelines.
        </p>
      </div>

      <div style={{ background: "#1d2a36", borderRadius: "20px", padding: "28px", color: "#f7f8fa", marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#dfeaf3", fontWeight: 700 }}>Next steps</p>
        <p style={{ marginTop: "16px", lineHeight: 1.8, color: "#edf4fb", marginBottom: 0 }}>
          Future work: add AI recommendations, edit recipe/review features, dark mode, and extend personalization. Continue testing and measuring impact on recipe discovery and nutrition outcomes.
        </p>
      </div>

      <div>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>Acknowledgements & bios</p>
        <div style={{ marginTop: "18px", background: "#ffffff", borderRadius: "20px", padding: "20px" }}>
          <p style={{ margin: 0, color: "#2f3b45", lineHeight: 1.6 }}>
            Thanks to Dr. Jeanette Andrade for advising, and to my teammates Sydney, Julia, Camryn, Julian for their collaboration.
          </p>
          <p style={{ marginTop: "12px", color: "#2f3b45", lineHeight: 1.6 }}>
            Short bios available in project deliverables.
          </p>
        </div>
      </div>

      <div style={{ marginTop: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          Photos of my summer
        </p>
        <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "28px", textAlign: "center", color: "#6e6e73" }}>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Coming soon — photos and notes from the Cuisine Compass project.
          </p>
        </div>
      </div>
    </section>
  );
}