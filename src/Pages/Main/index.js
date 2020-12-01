import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SplashPage from "../SplashPage";
import Header from "../../Components/Header";
import Nav from "../../Components/Nav";
import About from "../../Components/About";
import Skills from "../../Components/Skills";
import AllProjects from "../../Components/AllProjects";
import Contact from "../../Components/Contact";
import Footer from "../../Components/Footer";
import "./style.css";

export default function Main() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/">
            <SplashPage />
          </Route>
          <Route path="/main">
            <Header />
            <Nav />
            <div className="main-container">
              <About />
              <Skills />
              <AllProjects />
              <Contact />
              <Footer />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
