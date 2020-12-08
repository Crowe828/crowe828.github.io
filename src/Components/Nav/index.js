import React from "react";
import "./style.css";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="container justify-content-center">
        <a className="nav-link nav-btn" href="#about">
          About
        </a>
        <a className="nav-link nav-btn" href="#projects">
          Projects
        </a>
        <a className="nav-link nav-btn" href="#contact">
          Contact
        </a>
      </div>
    </nav>
  );
}
