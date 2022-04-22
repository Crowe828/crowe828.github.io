import React from "react";
import "./nav.css";
import Avataaar from "../../img/avataaars.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="row">
        {/* <div>
          <img src={Avataaar} alt="Avataaar" className="avataaar" />
        </div> */}
        <div>
          <h1 className="name">Christian (Rowe).</h1>
        </div>
      </div>
    </div>
  );
};

export default Nav;
