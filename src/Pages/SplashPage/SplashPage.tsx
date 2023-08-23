import { Link } from "react-router-dom";
import "./splashPage.css";

const SplashPage = () => {
  return (
    <div id="pipes-gif">
      <div className="splash-page">
        <h1 id="main-header">Christian (Rowe).</h1>
        <h2 id="sub-header">hello.</h2>
        <Link to={"/main"} id="main-link">
          <button id="main-button">continue</button>
        </Link>
      </div>
    </div>
  );
};

export default SplashPage;
