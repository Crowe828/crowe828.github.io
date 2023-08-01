import { Link } from "react-router-dom";
import "./SplashPage.css";

const SplashPage = () => {
  const td: any = { "--td": "1s" };
  const bc: any = { "--bc": "#ee6055", "--d": "0.1s" };

  return (
    <div className="splash-page">
      <h1 className="block-effect" style={td}>
        <div className="splash-text">
          <div className="block-reveal" style={bc}>
            (Christian) Rowe.
          </div>
          <div className="block-reveal" style={bc}>
            Welcome.
          </div>
          <Link to="/main">
            <button
              type="button"
              className="btn btn-lg btn-outline-success splash-btn"
            >
              Enter.
            </button>
          </Link>
        </div>
      </h1>
    </div>
  );
};

export default SplashPage;
