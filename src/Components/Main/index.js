import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SplashPage from "../SplashPage";
import Header from "../Header";
import Nav from "../Nav";
import About from "../About";
import AllProjects from "../AllProjects";
import Contact from "../Contact";
import Footer from "../Footer";
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
