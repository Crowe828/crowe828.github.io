import React from "react";
import Project from "../Project";
import AlienTown from "./Images/alientown.png";
import BurgerTime from "./Images/burgertime.png";
import InkMap from "./Images/inkmap.png";
import NipponMedia from "./Images/nipponmedia.png";
import WeatherDashboard from "./Images/weather-dashboard.png";
import WorkDayScheduler from "./Images/work-day-scheduler.png";
import WorkerLibrary from "./Images/worker-library.png";
import "./style.css";

const projects = [
  {
    id: 1,
    name: "Nippon Media",
    description:
      "A web app that lets users to search and save their favorite anime and manga. This application uses an MVC model designed to allow users to create an account using React, React Hooks, React Components, Redux, RESTful APIs, AJAX, JSON, JWT, MongoDB, Mongoose, Express, Node, and CSS frameworks Material-UI and Semantic UI.",
    github: "https://github.com/Crowe828/nipponmedia",
    appLink: "https://nipponmedia.herokuapp.com/",
    img: NipponMedia,
  },
  {
    id: 2,
    name: "Alien Town",
    description:
      "A web app designed for anyone interested in learning more about UFO sightings. Featuring a 30,000 record database that is searchable and can be updated. Technologies used include JavaScript ES6, MySQL, Node, Handlebars AJAX, and Bulma.io. This app features the Google Maps API to render coordinate-based data points, authorization, and full CRUD connected to a MySQL database.",
    github: "https://github.com/Crowe828/alientown",
    appLink: "https://mega-awesome.herokuapp.com",
    img: AlienTown,
  },
  {
    id: 3,
    name: "InkMap",
    description:
      "A web app that helps users find inspiration for their next tattoo and where to get it done. This application uses the Google Places and Unsplash APIs to render coordinate-based data points based on the user's location and display pictures based on the user's search. The markers on the map can be clicked on so that the user can learn more about each location. It was built using Axios, JavaScript, Bulma.io, and HTML5.",
    github: "https://github.com/Crowe828/inkmap",
    appLink: "https://crowe828.github.io/inkmap",
    img: InkMap,
  },
  {
    id: 4,
    name: "Worker Library",
    description: "A semi-smart application to track all of your employees.",
    github: "https://github.com/Crowe828/worker-library",
    appLink: "https://crowe828.github.io/worker-library",
    img: WorkerLibrary,
  },
  {
    id: 5,
    name: "BurgerTime",
    description: "Track your daily consumption of Burgers. Yes, really.",
    github: "https://github.com/Crowe828/burger",
    appLink: "https://shrouded-plateau-24290.herokuapp.com",
    img: BurgerTime,
  },
  {
    id: 6,
    name: "Weather Dashboard",
    description: "A simple weather experience.",
    github: "https://github.com/Crowe828/weather-dashboard",
    appLink: "https://crowe828.github.io/weather-dashboard",
    img: WeatherDashboard,
  },
  {
    id: 7,
    name: "Work Day Scheduler",
    description: "A lite planner for your work day.",
    github: "https://github.com/Crowe828/work-day-scheduler",
    appLink: "https://crowe828.github.io/work-day-scheduler",
    img: WorkDayScheduler,
  },
];

export default function AllProjects() {
  return (
    <div className="container portfolio" id="portfolio">
      <div className="row">
        <div className="col projects rounded">
          <h1 className="heading">Things I Make: A Portfolio.</h1>
          <hr />
          <div className="container projects">
            <Project projects={projects} />
          </div>
        </div>
      </div>
    </div>
  );
}
