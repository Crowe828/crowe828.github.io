import React from "react";
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import About from "../../Components/About";
import Skills from "../../Components/Skills";
import AllProjects from "../../Components/AllProjects";
import Contact from "../../Components/Contact";
import EmailForm from "../../Components/EmailForm";
import Footer from "../../Components/Footer";
import "./style.css";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <Nav />
      <About />
      <Skills />
      <AllProjects />
      <Contact />
      <EmailForm />
      <Footer />
    </div>
  );
}
