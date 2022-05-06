import "../HamburgerMenu/HamburgerMenu";
import "./nav.css";
import Avataaar from "../../img/avataaars.png";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

const Nav = () => {
  return (
    <div className="nav">
      <div className="row">
        <div>
          <img src={Avataaar} alt="Avataaar" className="avataaar" />
          <span className="name">Christian (Rowe).</span>
        </div>
      </div>
      <HamburgerMenu />
    </div>
  );
};

export default Nav;
