import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
  return (
    <header className="header splash-return">
      <Link to="/">(Christian) Rowe.</Link>
    </header>
  );
}
