import React from "react";
import "./style.css";

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
              href="https://mega-awesome.herokuapp.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              Alien Town
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
              href="https://crowe828.github.io/worker-library"
              rel="noreferrer noopener"
              target="_blank"
            >
              Worker Library
            </a>
            <a
              className="dropdown-item"
              href="https://peaceful-anchorage-10949.herokuapp.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              Fit Buddy
            </a>
            <a
              className="dropdown-item"
              href="https://shrouded-plateau-24290.herokuapp.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              BurgerTime
            </a>
            <a
              className="dropdown-item"
              href="https://dry-dawn-05181.herokuapp.com/notes"
              rel="noreferrer noopener"
              target="_blank"
            >
              Note Taker
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
