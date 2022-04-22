import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ComputerMan from "../../img/computerMan.png";
import "./about.css";

const About = () => {
  return (
    <div className="row row-about">
      <div className="column column-about">
        <h1 className="text-about-1">i like making apps that look pretty.</h1>
        <h2 className="text-about-2">
          this is my prettiest app. <FontAwesomeIcon icon={faArrowRight} />
        </h2>
      </div>
      <div className="column">
        <img src={ComputerMan} alt="Man with Computer" />
      </div>
    </div>
  );
};

export default About;
