import React from "react";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar navbar-expand">
      <div className="navbar-nav navbar-menu container justify-content-center">
        <a type="button" className="nav-link nav-btn" href="#about">
          About
        </a>
        <a type="button" className="nav-link nav-btn" href="#contact">
          Contact
        </a>
        <div className="btn-group nav-btn">
          <a type="button" className="nav-link nav-btn" href="#projects">
            Projects
          </a>
          <button
            type="button"
            className="dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu dropdown-menu-left">
            <a
              className="dropdown-item"
              href="https://nipponmedia.herokuapp.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              Nippon Media
            </a>
            <a
              className="dropdown-item"
              href="https://instagram-lite-62791.web.app/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Instagram Lite
            </a>
            <a
              className="dropdown-item"
              href="https://spotify-mini.web.app/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Spotify Mini
            </a>
            <a
              className="dropdown-item"
              href="https://crowe828.github.io/inkmap"
              rel="noreferrer noopener"
              target="_blank"
            >
              InkMap
            </a>
            <a
              className="dropdown-item"
              href="https://mega-awesome.herokuapp.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              Alien Town
            </a>
            <a
              className="dropdown-item"
              href="https://crowe828.github.io/worker-library"
              rel="noreferrer noopener"
              target="_blank"
            >
              Worker Library
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
