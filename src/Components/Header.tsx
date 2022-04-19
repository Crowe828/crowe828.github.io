import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className=" splash-return">
        (Christian) Rowe.
      </Link>
    </header>
  );
};

export default Header;
