import React from "react";
import "./Contact.css";
import Ramen from "./img/ramen.jpeg";

export default function Contact() {
  return (
    <div className="contact container" id="contact">
      <div className="row">
        <div className="col-md-6">
          <div className="contact-text rounded">
            <h1>
              <strong>Let's Talk.</strong>
            </h1>
            <hr />
            <p>
              Talk, email, LinkedIn, or even smoke signal. Whatever it takes,
              let's work together. Please reach out any time, even if it's to
              grab a bowl of ramen and talk shop.
            </p>
          </div>

          <div className="contact__info">
            <div className="list-group">
              <a
                className="list-group-item list-group-item-dark list-group-item-action"
                href="https://github.com/Crowe828"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa fa-github-square" /> GitHub
              </a>
              <a
                className="list-group-item list-group-item-dark list-group-item-action"
                href="https://www.linkedin.com/in/christiantrowe/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fab fa-linkedin" /> LinkedIn
              </a>
              <a
                className="list-group-item list-group-item-dark list-group-item-action"
                href="https://drive.google.com/file/d/10Aq6L_k-3rUtGjMLbhFVR9b9--RIRBeZ/view?usp=sharing"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fas fa-file-alt" /> Resume
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className="ramen rounded" src={Ramen} alt="Ramen" />
        </div>
      </div>
    </div>
  );
}
