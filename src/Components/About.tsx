import React from "react";
import "./about.css";

export default function About() {
  return (
    <div className="about container" id="about">
      <div className="row">
        <div className="col-md-6">
          <div className="about-me rounded">
            <h1>
              <strong>An Introduction.</strong>
            </h1>
            <hr />
            <p>
              I'm Christian. I'm a web developer. My passion is developing apps
              that people love using.
              <br />
              <br />
              Fun facts about me:
              <br />I take my coffee black, and I love to run. I obsess over the
              smallest details, which is why I find programming so fun.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
