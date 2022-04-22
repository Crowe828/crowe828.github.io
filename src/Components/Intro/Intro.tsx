import React from "react";
import Glasses from "../../img/glasses.png";
import "./intro.css";

const Intro = () => {
  return (
    <div className="row row-intro">
      <div className="column">
        <img src={Glasses} alt="glasses" />
      </div>
      <div className="column column-intro">
        <h1 className="text-intro">
          hi. <br />
          i'm christian.
          <br />i do computer stuff.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
