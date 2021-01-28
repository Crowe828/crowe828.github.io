import React from "react";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="container">
      <div className="skills rounded">
        <h1>
          <strong>Skills.</strong>
        </h1>
        <hr />
        <section className="bar-graph bar-graph-horizontal bar-graph-one">
          <div className="bar-one">
            <span className="skill">JavaScript</span>
            <div className="bar" data-percentage="100%" />
          </div>
          <div className="bar-two">
            <span className="skill">CSS</span>
            <div className="bar" data-percentage="100%" />
          </div>
          <div className="bar-three">
            <span className="skill">HTML</span>
            <div className="bar" data-percentage="100%" />
          </div>
          <div className="bar-four">
            <span className="skill">React</span>
            <div className="bar" data-percentage="90%" />
          </div>
          <div className="bar-five">
            <span className="skill">Node</span>
            <div className="bar" data-percentage="80%" />
          </div>
          <div className="bar-six">
            <span className="skill">MongoDB</span>
            <div className="bar" data-percentage="75%" />
          </div>
          <div className="bar-seven">
            <span className="skill">Express</span>
            <div className="bar" data-percentage="70%" />
          </div>
        </section>
      </div>
    </div>
  );
}
