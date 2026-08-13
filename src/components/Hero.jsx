import React from "react";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("home-projects");
    if (!el) return;
    const navHeight = 64;
    const offset = 20;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight - offset;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>hi, i’m alexa!</h1>

        <h2>
          user experience designer <span className="smaller-text">& engineer ;)</span>
        </h2>
      </div>

      <div
        className="scroll-indicator"
        role="button"
        tabIndex={0}
        onClick={scrollToProjects}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") scrollToProjects();
        }}
        aria-label="Scroll to my work"
      >
        my work ↓
      </div>
    </section>
  );
}




