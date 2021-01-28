import React from "react";
import "./About.css";
import MyDrawing from "./img/me-drawing.jpeg";

export default function About() {
  return (
    <div className="about container" id="about">
      <div className="row">
        <div className="col-md-6">
          <img className="my-face rounded" src={MyDrawing} alt="My face" />
        </div>
        <div className="col-md-6">
          <div className="about-me rounded">
            <h1>
              <strong>An Introduction.</strong>
            </h1>
            <hr />
            <p>
              I'm Christian. I'm a full stack web developer. I use a MERN stack.
              My first goal in life is to be on Double Dare: 2000. My second is
              to create simple, understandable applications.
              <br />
              <br />
              Fun Facts about me: I have a collection of over 50 Rubik's Cubes.
              I take my coffee black. I think React Hooks are superior to React
              Components.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
