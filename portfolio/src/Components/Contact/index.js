import React from "react";
import "./style.css";
import Ramen from "./Images/ramen.jpeg";

export default function Contact() {
  return (
    <div className="container contact" id="contact">
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

            <div className="list-group">
              <li className="list-group-item list-group-item-dark list-group-item-action">
                <i className="fa fa-phone"></i> Phone: (407) 758-9719
              </li>
              <a
                className="list-group-item list-group-item-dark list-group-item-action"
                href="mailto:crowe828@gmail.com"
              >
                <i className="fa fa-envelope-open-text"></i> Email:
                Crowe828@gmail.com
              </a>
              <a
                className="list-group-item list-group-item-dark list-group-item-action"
                href="https://github.com/Crowe828"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fa fa-github-square"></i> GitHub: Crowe828
              </a>
              <a
                className="list-group-item list-group-item-dark list-group-item-action"
                href="https://www.linkedin.com/in/christiantrowe/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i> LinkedIn: Christian Taylor
                Rowe
              </a>
              <a
                className="list-group-item list-group-item-dark list-group-item-action"
                href="https://drive.google.com/file/d/1phzJFrAvhXYxH0q0E92uDeXaptUg2o9U/view?usp=sharing"
                rel="noreferrer noopener"
                target="_blank"
              >
                <i class="fas fa-file-alt"></i> Resume: Downloadable Edition
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
