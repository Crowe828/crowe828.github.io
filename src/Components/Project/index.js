import React from "react";
import "./Project.css";

export default function Projects(props) {
  return (
    <>
      {props.projects.map((project) => (
        <div className="row" key={project.id}>
          <div className="d-flex col-md card-container justify-content-center">
            <a
              href={project.github}
              rel="noreferrer noopener"
              target="_blank"
              className="img-txt"
            >
              <h2 className="img-title">
                <i className="fa fa-github-square"></i> {project.name}
              </h2>
              {project.description}
            </a>
          </div>
          <div className="d-flex col-md card-container justify-content-center">
            <a href={project.appLink} rel="noreferrer noopener" target="_blank">
              <img
                src={project.img}
                className="img-thumbnail img-fluid"
                alt={project.name}
              />
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
