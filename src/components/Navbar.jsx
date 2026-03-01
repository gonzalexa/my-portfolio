import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-name">
        Alexa Gonzalez
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/projects">Work</Link>
        <Link to="/about">About</Link>
        <a 
          href="https://docs.google.com/document/d/15MNpdVCxYScxo8z2AK73CQ1nEzp4CStFRN3Qz0bh5bI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          >
            Resume
        </a>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}