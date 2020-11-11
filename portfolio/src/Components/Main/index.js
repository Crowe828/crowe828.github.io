import React from "react";
import Header from "../Header";
import AllProjects from "../AllProjects";
import Footer from "../Footer";
import About from "../About";
import Contact from "../Contact";
import Nav from "../Nav";
import "./style.css";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Nav />
      <div className="main-container">
        <About />
        <AllProjects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
