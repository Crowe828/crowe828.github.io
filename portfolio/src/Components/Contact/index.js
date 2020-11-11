import React from "react";
import "./style.css";
import Ramen from "./Images/ramen.jpeg";

export default function Contact() {
  return (
    <div className="container contact">
      <div className="row">
        <div className="col-md-6 about-me rounded">
          <h1 className="my-heading">Let's Talk.</h1>
          <hr />
          <div className="contact-text">
            <p>
              Talk, email, LinkedIn, or even smoke signal. Whatever it takes,
              let's work together. Please reach out any time, even if it's to
              grab a bowl of ramen and talk shop.
            </p>
            <br />

            <ul>
              <li>
                <i className="fa fa-phone"></i> Phone: (407) 758-9719
              </li>
              <br />

              <li className="contact-link">
                <a className="contact-link" href="mailto:crowe828@gmail.com">
                  <i className="fa fa-envelope-open-text"></i> Email:
                  Crowe828@gmail.com
                </a>
              </li>
              <br />

              <li>
                <a
                  className="contact-link"
                  href="https://github.com/Crowe828"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <i className="fa fa-github-square"></i> GitHub: Crowe828
                </a>
              </li>
              <br />

              <li>
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/christiantrowe/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <i className="fa fa-linkedin"></i> LinkedIn: Christian Taylor
                  Rowe
                </a>
              </li>
            </ul>
          </div>
          <br />

          <a
            className="btn btn-lg contact-btn"
            href="https://drive.google.com/file/d/1phzJFrAvhXYxH0q0E92uDeXaptUg2o9U/view?usp=sharing"
            rel="noreferrer noopener"
            target="_blank"
            role="button"
          >
            Download Resume
          </a>
        </div>
        <div className="col-md-6">
          <img className="ramen rounded" src={Ramen} alt="Ramen" />
        </div>
      </div>
    </div>
  );
}
