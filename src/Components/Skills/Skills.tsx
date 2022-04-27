import React from "react";
import WomanAndMan from "../../img/womanAndMan.png";
import "./skills.css";

const Skills = () => {
  return (
    <div className="row row-skills">
      <div className="column">
        <img src={WomanAndMan} alt="Woman and Man" />
      </div>
      <div className="column column-skills">
        <h1 className="text-skills">
          i mainly use React, TypeScript, and CSS.
        </h1>
      </div>
    </div>
  );
};

export default Skills;
