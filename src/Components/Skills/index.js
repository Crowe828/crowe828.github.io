import React from "react";
import "./style.css";

export default function Skills() {
  return (
    <div className="container skills rounded">
      <div className="row" />
      <h1 className="skills-header">Skills: The Best Ones.</h1>
      <hr />
      <section className="bar-graph bar-graph-horizontal bar-graph-one">
        <div className="bar-one">
          <span className="skill">MongoDB</span>
          <div className="bar" data-percentage="65%" />
        </div>
        <div className="bar-two">
          <span className="skill">Express</span>
          <div className="bar" data-percentage="70%" />
        </div>
        <div className="bar-three">
          <span className="skill">React</span>
          <div className="bar" data-percentage="80%" />
        </div>
        <div className="bar-four">
          <span className="skill">Node</span>
          <div className="bar" data-percentage="75%" />
        </div>
        <div className="bar-five">
          <span className="skill">JavaScript ES6</span>
          <div className="bar" data-percentage="95%" />
        </div>
        <div className="bar-six">
          <span className="skill">CSS3</span>
          <div className="bar" data-percentage="100%" />
        </div>
        <div className="bar-seven">
          <span className="skill">HTML5</span>
          <div className="bar" data-percentage="100%" />
        </div>
      </section>
    </div>
  );
}
