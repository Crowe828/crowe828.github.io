import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-nav navbar-menu container justify-content-center">
        <a className="nav-link nav-btn" href="#about">
          About
        </a>
        <a className="nav-link nav-btn" href="#contact">
          Contact
        </a>
        <div className="btn-group nav-btn">
          <a className="nav-link nav-btn" href="#projects">
            Projects
          </a>
        </div>
      </div>
    </nav>
  );
}
