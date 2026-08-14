import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function MetaPage() {
  const stats = [
    { label: "Role", value: "Summer internship at Meta in the Meta University program" },
    { label: "Project", value: "Boosting trust in Facebook Marketplace" },
    { label: "Focus", value: "More From This Seller on the profile detail page" },
  ];

  const challenges = [
    {
      title: "Placement",
      text: "Where do we place the More From This Seller component so it feels helpful without crowding the page?",
    },
    {
      title: "Timing",
      text: "When is the best moment to signal that the seller has additional listings and stronger credibility?",
    },
    {
      title: "Format",
      text: "Should trust be communicated through a button, a link, or a card grid that surfaces seller inventory?",
    },
  ];

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

      <div
        style={{
          borderBottom: "1px solid rgba(29,42,54,0.1)",
          paddingBottom: "32px",
          marginBottom: "36px",
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: "12px",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#6e6e73",
            fontWeight: 700,
          }}
        >
          Meta • Internship case study
        </p>
        <h1
          style={{
            margin: "16px 0 12px",
            fontSize: "clamp(2.6rem, 5vw, 5rem)",
            lineHeight: 1,
            color: "#1d2a36",
            letterSpacing: "-0.06em",
          }}
        >
          Boosting trust in Facebook Marketplace
        </h1>
        <p style={{ margin: 0, fontSize: "1.15rem", color: "#4f5965", maxWidth: "760px" }}>
          A design exploration focused on helping young adult buyers trust sellers more by surfacing more context and inventory through a seller profile experience.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "18px",
          marginBottom: "42px",
        }}
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            style={{
              background: "#f5f7fa",
              border: "1px solid rgba(29,42,54,0.06)",
              borderRadius: "18px",
              padding: "18px 20px",
            }}
          >
            <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73" }}>
              {stat.label}
            </p>
            <p style={{ margin: "10px 0 0", color: "#2c3742", lineHeight: 1.6 }}>{stat.value}</p>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "28px", marginBottom: "36px" }}>
        <div style={{ background: "#f5f7fa", borderRadius: "20px", padding: "28px" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
            Overview
          </p>
          <p style={{ marginTop: "16px", lineHeight: 1.8, color: "#273640" }}>
            My project consisted of boosting trust in Facebook Marketplace with a focus on a “More from this Seller” component on the profile detail page. The goal was to understand why many young adult buyers hesitate to transact on Facebook Marketplace when they are comfortable shopping on platforms like Depop, Etsy, and Amazon.
          </p>
        </div>

        <div style={{ background: "#1d2a36", borderRadius: "20px", padding: "28px", color: "#f5f7fa" }}>
          <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#dfeaf3", fontWeight: 700 }}>
            Core question
          </p>
          <p style={{ marginTop: "16px", lineHeight: 1.7, color: "#edf4fb" }}>
            How can we help young adult buyers feel more confident in a seller by surfacing profile context and a stronger sense of trust?
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          Research + competitive analysis
        </p>
        <div style={{ marginTop: "18px", background: "#ffffff", border: "1px solid rgba(29,42,54,0.08)", borderRadius: "20px", padding: "28px" }}>
          <p style={{ lineHeight: 1.8, color: "#2f3b45", margin: 0 }}>
            To better understand Facebook Marketplace, I began by conducting a competitive analysis on why trust matters in marketplace environments and how other platforms emphasize seller trust. I looked closely at Amazon, Etsy, and Depop to understand the internal patterns that make users feel reassured and confident. The key insight was that trust is not just a visual cue—it is a system of transparency, social proof, and familiarity baked into the product experience.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          Design challenges
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "18px",
            marginTop: "18px",
          }}
        >
          {challenges.map((item) => (
            <div
              key={item.title}
              style={{
                background: "#f7f3ee",
                borderRadius: "18px",
                padding: "22px",
                border: "1px solid rgba(29,42,54,0.05)",
              }}
            >
              <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
                {item.title}
              </p>
              <p style={{ marginTop: "12px", color: "#2f3b45", lineHeight: 1.7 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          Design process
        </p>
        <div style={{ marginTop: "18px", background: "#ffffff", border: "1px solid rgba(29,42,54,0.08)", borderRadius: "20px", padding: "28px" }}>
          <p style={{ lineHeight: 1.8, color: "#2f3b45", margin: 0 }}>
            After presenting my analysis to my internal and design team, I took the feedback and began working on early wireframe explorations. I focused on how to signal trust without overwhelming the page, and how to keep the experience useful for young adult buyers without disrupting the listing flow. The design decisions revolved around surfacing seller credibility, improving visibility into product inventory, and making the trust signal feel natural rather than intrusive.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          Iteration + prototyping
        </p>
        <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "28px" }}>
          <p style={{ lineHeight: 1.8, color: "#2f3b45", margin: 0 }}>
            After a few weeks of polishing early explorations, I had three final design solutions ready for prototyping. It was a challenging process because it had been more than a month since we learned the basics of Figma at design camp. By reaching out to other product designers and my mentor, I was able to refine the prototypes and prepare for my final presentation deck.
          </p>
        </div>
      </div>

      <div style={{ marginBottom: "36px", background: "linear-gradient(135deg, #eaf4ff 0%, #f7f3ee 100%)", borderRadius: "20px", padding: "28px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          What I learned
        </p>
        <p style={{ marginTop: "16px", lineHeight: 1.8, color: "#2f3b45", marginBottom: 0 }}>
          During the project I learned how to present design work to cross-functional partners, iterate quickly with engineering feedback, and adapt prototypes into real product experiments. Seeing two designs enter dogtesting and receiving privacy review taught me the importance of ship-ready details, documentation, and collaboration across disciplines.
        </p>
      </div>

      <div style={{ marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          Conclusion
        </p>
        <div style={{ marginTop: "18px", background: "#ffffff", border: "1px solid rgba(29,42,54,0.08)", borderRadius: "20px", padding: "28px" }}>
          <p style={{ lineHeight: 1.8, color: "#2f3b45", margin: 0 }}>
            It was incredible to see my designs in a real product flow rather than only on Figma. The project receiving privacy review and entering dogtesting validated the impact and readiness of the work. These milestones reinforced how iterative design, rapid prototyping, and strong cross-functional collaboration are essential to moving ideas forward.
          </p>
        </div>
      </div>

      <div style={{ background: "#1d2a36", borderRadius: "20px", padding: "28px", color: "#f7f8fa", marginBottom: "36px" }}>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#dfeaf3", fontWeight: 700 }}>
          Next steps
        </p>
        <p style={{ marginTop: "16px", lineHeight: 1.8, color: "#edf4fb", marginBottom: 0 }}>
          Continue iterating on the strongest concept based on dogtesting feedback, run more user validation with young adults, and measure the impact on trust and conversion. Expand the trust signal to additional marketplace touchpoints as warranted by results.
        </p>
      </div>

      <div>
        <p style={{ margin: 0, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#6e6e73", fontWeight: 700 }}>
          Photos of my summer
        </p>
        <div style={{ marginTop: "18px", background: "#f5f7fa", borderRadius: "20px", padding: "28px", textAlign: "center", color: "#6e6e73" }}>
          <p style={{ margin: 0, lineHeight: 1.6 }}>
            Coming soon — photos and memories from the internship at Meta.
          </p>
        </div>
      </div>
    </section>
  );
}
