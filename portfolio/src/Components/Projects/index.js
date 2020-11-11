import React from "react";
import "./style.css";

export default function Projects() {
  return (
    <div className="container">
      <div className="row">
        <div className="col about-me rounded">
          <h2 className="my-heading">Things I Make: A Portfolio.</h2>
          <div className="container">
            <div className="row">
              <a
                href="https://github.com/Crowe828/alientown"
                rel="noreferrer noopener"
                target="_blank"
                className="image-text"
              >
                <i className="fa fa-github-square"></i> Alien Town: A web
                application built for conspiracy theorists and alien lovers
                alike.
              </a>
              <div className="d-flex col-md card-container justify-content-center">
                <a
                  href="https://mega-awesome.herokuapp.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    src="./assets/images/portfolio/alientown.png"
                    className="img-thumbnail img-fluid"
                    alt="Alien Town"
                  />
                </a>
              </div>
            </div>

            <div className="row">
              <a
                href="https://github.com/Crowe828/inkmap"
                rel="noreferrer noopener"
                target="_blank"
                className="image-text"
              >
                <i className="fa fa-github-square"></i> InkMap: Inspiring your
                next tattoo. Showing you where to get it done.
              </a>
              <div className="d-flex col-md card-container justify-content-center">
                <a
                  href="https://crowe828.github.io/inkmap/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    src="./assets/images/portfolio/inkmap.png"
                    className="img-thumbnail img-fluid"
                    alt="inkmap"
                  />
                </a>
              </div>
            </div>

            <div className="row">
              <a
                href="https://github.com/Crowe828/burger"
                rel="noreferrer noopener"
                target="_blank"
                className="image-text"
              >
                <i className="fa fa-github-square"></i> STOP: BurgerTime.
              </a>
              <div className="d-flex col-md card-container justify-content-center">
                <a
                  href="https://shrouded-plateau-24290.herokuapp.com"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    src="./assets/images/portfolio/burgertime.png"
                    className="img-thumbnail img-fluid"
                    alt="BurgerTime"
                  />
                </a>
              </div>
            </div>

            <div className="row">
              <a
                href="https://github.com/Crowe828/work-day-scheduler"
                rel="noreferrer noopener"
                target="_blank"
                className="image-text"
              >
                <i className="fa fa-github-square"></i> Weather Dashboard: A
                simple weather experience.
              </a>
              <div className="d-flex col-md card-container justify-content-center">
                <a
                  href="https://crowe828.github.io/weather-dashboard/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    src="./assets/images/portfolio/weather-dashboard.png"
                    className="img-thumbnail img-fluid"
                    alt="weather-dashboard"
                  />
                </a>
              </div>
            </div>

            <div className="row">
              <a
                href="https://github.com/Crowe828/work-day-scheduler"
                rel="noreferrer noopener"
                target="_blank"
                className="image-text"
              >
                <i className="fa fa-github-square"></i> Work Day Scheduler: A
                lite planner for your work day.
              </a>
              <div className="d-flex col-md card-container justify-content-center">
                <a
                  href="https://crowe828.github.io/work-day-scheduler/"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <img
                    src="./assets/images/portfolio/work-day-scheduler.png"
                    className="img-thumbnail img-fluid"
                    alt="work-day-scheduler"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
