import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function SplashPage() {
  return (
    <body className="splash-page">
      <h1 className="block-effect" style={{ "--td": "1s" }}>
        <div className="splash-text">
          <div
            className="block-reveal"
            style={{ "--bc": "#ee6055", "--d": "0.1s" }}
          >
            (Christian) Rowe.
          </div>
          <div
            className="block-reveal"
            style={{ "--bc": "#60d394", "--d": "0.3s" }}
          >
            Welcome.
          </div>
          <Link to="/main">
            <div className="btn btn-lg splash-btn" role="button">
              Enter.
            </div>
          </Link>
        </div>
      </h1>
    </body>
  );
}
