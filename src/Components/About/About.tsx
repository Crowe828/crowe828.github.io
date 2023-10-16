import ComputerMan from "../../img/computerMan.png";
import "./about.css";

const About = () => {
  return (
    <div className="row">
      <div className="column column-about">
        <h1 className="text-about">
          I like making apps that look pretty. I also like coffee... a lot.
        </h1>
      </div>
      <div className="column">
        <img src={ComputerMan} alt="Man with Computer" id="man-with-computer" />
      </div>
    </div>
  );
};

export default About;
