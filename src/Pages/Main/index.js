import React from "react";
import Header from "../../components/Header";
import Nav from "../../components/Nav";
import About from "../../components/About";
import Skills from "../../components/Skills";
import AllProjects from "../../components/AllProjects";
import Contact from "../../components/Contact";
import EmailForm from "../../components/EmailForm";
import Footer from "../../components/Footer";
import "./Main.css";

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
        <EmailForm />
      </div>
      <Footer />
    </div>
  );
}
