import React from "react";
import Nav from "../../Components/Nav/Nav";
import Intro from "../../Components/Intro/Intro";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import Work from "../../Components/Work/Work";
import "./main.css";

const Main = () => {
  return (
    <div className="background">
      <Nav />
      <Intro />
      <About />
      <Skills />
      <Work />
    </div>
  );
};

export default Main;
