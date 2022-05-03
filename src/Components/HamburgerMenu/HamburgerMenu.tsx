import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./hamburgerMenu.css";

const HamburgerMenu = () => {
  return (
    <Menu right className="hamburgerMenu">
      <h1 className="title">let's talk.</h1>
      <a
        id="linkedin"
        className="menu-item"
        href="https://www.linkedin.com/in/christiantrowe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        id="github"
        className="menu-item"
        href="https://github.com/Crowe828"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        id="resume"
        className="menu-item"
        href="https://docs.google.com/document/d/1AhIQjvdY0MZS8ccRyJUmRUCQKwVTCtu0/edit?usp=sharing&ouid=101625643380472302108&rtpof=true&sd=true"
        target="_blank"
        rel="noopener noreferrer"
      >
        Resume
      </a>
      <a
        id="email"
        className="menu-item"
        href="mailto:crowe.dev@outlook.com?subject=Let's Work Together"
        target="_blank"
        rel="noopener noreferrer"
      >
        Email Me
      </a>
      <a
        id="phone"
        className="menu-item"
        href="tel:407-758-9719"
        target="_blank"
        rel="noopener noreferrer"
      >
        Give Me a Call
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
