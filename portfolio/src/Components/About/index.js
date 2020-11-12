import React from "react";
import "./style.css";
import MyFace from "./Images/me-bricks.jpeg";

export default function About() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img className="my-face rounded" src={MyFace} alt="My face" />
        </div>
        <div className="col-md-6 about-me rounded">
          <h2 className="my-heading">Me: An Introduction.</h2>
          <hr />
          <p className="about-me-text">
            I'm Christian. My first goal in life is to be on Double Dare: 2000.
            My second is to create simple, understandable applications.
            <br />
            <br />
            Facts about me: I have a collection of over 50 Rubik's Cubes and
            host a podcast called "Bad Movie Journalists" where I discuss the
            beauty in bad movies.
          </p>
        </div>
      </div>
    </div>
  );
}
