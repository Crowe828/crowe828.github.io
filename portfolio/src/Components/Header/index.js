import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className=" splash-return">
        (Christian) Rowe.
      </Link>
    </header>
  );
}
