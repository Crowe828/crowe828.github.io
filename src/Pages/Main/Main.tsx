import React from "react";
import Nav from "../../Components/Nav/Nav";
import Intro from "../../Components/Intro/Intro";
import About from "../../Components/About/About";
import Skills from "../../Components/Skills/Skills";
import "./main.css";

const Main = () => {
  return (
    <div className="background">
      <Nav />
      <Intro />
      <About />
      <Skills />
    </div>
  );
};

export default Main;
