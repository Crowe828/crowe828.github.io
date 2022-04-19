import React from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Skills from "./Components/Skills";
import AllProjects from "./Components/AllProjects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import "./main.css";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Nav />
      <div className="main__container">
        <About />
        <Skills />
        <AllProjects />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
