import React from "react";
import "./nav.css";
import Avataaar from "../../img/avataaars.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="row">
        <div className="column">
          <img src={Avataaar} alt="Avataaar" className="avataaar" />
        </div>
        <div className="column">2</div>
      </div>
    </div>
  );
};

export default Nav;
