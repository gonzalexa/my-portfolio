import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid #e5e5e5",
        marginTop: "120px",
        padding: "32px 20px",
      }}
    >

      {/* Cute message */}
      <p
        style={{
          maxWidth: "1100px",
          margin: "0 auto 32px",
          fontSize: "14px",
          color: "#777",
          lineHeight: "1.6",
        }}
      >
        Built with care.
        <br />
        Thanks for stopping by.
      </p>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "14px",
          color: "#555",
        }}
      >
        <span>© {new Date().getFullYear()} Alexa Gonzalez</span>

        <div style={{ display: "flex", gap: "24px" }}>
          <a href="mailto:alexa.95746@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/gonzalezalexa049/" target="_blank">
            LinkedIn
          </a>
          <a href="https://github.com/yourusername" target="_blank">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}