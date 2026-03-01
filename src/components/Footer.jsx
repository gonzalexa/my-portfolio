import React from "react";
import { Mail, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-message">
        Designed & coded with care.
        <br />
        Thanks for stopping by.
      </p>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Alexa Gonzalez</span>

        <div className="footer-links">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=lex.gonzlo7@gmail.com&su=Let's%20connect!"
          target="_blank"
          rel="noopener noreferrer"
        >
          Email
        </a>

          <a
            href="https://www.linkedin.com/in/gonzalezalexa049/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://docs.google.com/document/d/15MNpdVCxYScxo8z2AK73CQ1nEzp4CStFRN3Qz0bh5bI/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}