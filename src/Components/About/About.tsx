import React from "react";
import ComputerMan from "../../img/computerMan.png";
import "./about.css";

const About = () => {
  return (
    <div className="row row-about">
      <div className="column column-about">
        <h1 className="text-about">i like making apps that look pretty.</h1>
      </div>
      <div className="column">
        <img src={ComputerMan} alt="Man with Computer" />
      </div>
    </div>
  );
};

export default About;
