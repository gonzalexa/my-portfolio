import React from "react";
import { Mail, Linkedin } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>

      <p className="contact-intro">
        I would love to hear from you! I'm always open to giving mentorship and/or simply connecting.
      </p>

      <div className="contact-links">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=lex.gonzlo7@gmail.com&su=Let's%20connect!"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <Mail size={18} strokeWidth={1.5} />
          <span>Send me an email</span>
        </a>

        <a
          href="https://www.linkedin.com/in/gonzalezalexa049/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-item"
        >
          <Linkedin size={18} strokeWidth={1.5} />
          <span>Connect with me</span>
        </a>
      </div>
    </section>
  );
}