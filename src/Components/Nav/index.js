import React from "react";
import "./style.css";

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
          <a className="nav-link nav-btn" href="#portfolio">
            Portfolio
          </a>
          <button
            type="button"
            className="btn dropdown-toggle dropdown-toggle-split"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="sr-only">Toggle Dropdown</span>
          </button>
          <div className="dropdown-menu">
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
              href="https://shrouded-plateau-24290.herokuapp.com"
              rel="noreferrer noopener"
              target="_blank"
            >
              BurgerTime
            </a>
            <a
              className="dropdown-item"
              href="https://crowe828.github.io/weather-dashboard"
              rel="noreferrer noopener"
              target="_blank"
            >
              Weather Dashboard
            </a>
            <a
              className="dropdown-item"
              href="https://crowe828.github.io/work-day-scheduler"
              rel="noreferrer noopener"
              target="_blank"
            >
              Work Day Scheduler
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
