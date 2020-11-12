import React from "react";
import Project from "../Project";
import AlienTown from "./Images/alientown.png";
import BurgerTime from "./Images/burgertime.png";
import InkMap from "./Images/inkmap.png";
import WeatherDashboard from "./Images/weather-dashboard.png";
import WorkDayScheduler from "./Images/work-day-scheduler.png";
import WorkerLibrary from "./Images/worker-library.png";
import "./style.css";

const projects = [
  {
    id: 1,
    name: "Alien Town",
    description:
      "A web application built for conspiracy theorists and alien lovers alike.",
    github: "https://github.com/Crowe828/alientown",
    appLink: "https://mega-awesome.herokuapp.com",
    img: AlienTown,
  },
  {
    id: 2,
    name: "InkMap",
    description:
      "Inspiring your next tattoo. Showing you where to get it done.",
    github: "https://github.com/Crowe828/inkmap",
    appLink: "https://crowe828.github.io/inkmap",
    img: InkMap,
  },
  {
    id: 3,
    name: "STOP: BurgerTime.",
    description: "Track your daily consumption of Burgers. Yes, really.",
    github: "https://github.com/Crowe828/burger",
    appLink: "https://shrouded-plateau-24290.herokuapp.com",
    img: BurgerTime,
  },
  {
    id: 4,
    name: "Weather Dashboard",
    description: "A simple weather experience.",
    github: "https://github.com/Crowe828/weather-dashboard",
    appLink: "https://crowe828.github.io/weather-dashboard",
    img: WeatherDashboard,
  },
  {
    id: 5,
    name: "Work Day Scheduler",
    description: "A lite planner for your work day.",
    github: "https://github.com/Crowe828/work-day-scheduler",
    appLink: "https://crowe828.github.io/work-day-scheduler",
    img: WorkDayScheduler,
  },
  {
    id: 6,
    name: "Worker Library",
    description: "A semi-smart application to track all of your employees.",
    github: "https://github.com/Crowe828/worker-library",
    appLink: "https://crowe828.github.io/worker-library",
    img: WorkerLibrary,
  },
];

export default function AllProjects() {
  return (
    <div className="container portfolio">
      <div className="row">
        <div className="col projects rounded">
          <h2 className="heading">Things I Make: A Portfolio.</h2>
          <hr/>
          <div className="container projects">
            <Project projects={projects}/>
          </div>
        </div>
      </div>
    </div>
  );
}
