import React from "react";
import { stack as Menu } from "react-burger-menu";
import "./hamburgerMenu.css";

const HamburgerMenu = () => {
  const showSettings = (e: any) => {
    e.preventDefault();
  };

  return (
    <Menu right>
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a
        onClick={showSettings}
        className="menu-item--small"
        href="https://github.com/negomi/react-burger-menu#animations"
      >
        Settings
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
