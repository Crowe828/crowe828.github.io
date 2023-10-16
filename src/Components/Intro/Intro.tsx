import Glasses from "../../img/glasses.png";
import "./intro.css";

const Intro = () => {
  return (
    <div className="row">
      <div className="column">
        <img src={Glasses} alt="glasses" />
      </div>
      <div className="column column-intro">
        <h1 className="text-intro">
          Hi. <br />
          I'm Christian.
          <br />I do computer stuff.
        </h1>
      </div>
    </div>
  );
};

export default Intro;
