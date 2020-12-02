import React from "react";
import Project from "../Project";
import AlienTown from "./Images/alientown.png";
import BurgerTime from "./Images/burgertime.png";
import InkMap from "./Images/inkmap.png";
import NipponMedia from "./Images/nipponmedia.png";
import NoteTaker from "./Images/note-taker.png";
import FitTracker from "./Images/fit-tracker.png";
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
    description:
      "This application allows users to search through an employee database and filter users alphabetically. The search funtion filters data in real-time. This app was built using React, React Components, JavaScript ES6, CSS, and HTML5.",
    github: "https://github.com/Crowe828/worker-library",
    appLink: "https://crowe828.github.io/worker-library",
    img: WorkerLibrary,
  },
  {
    id: 5,
    name: "Fit Buddy",
    description:
      "This application is used to track your workouts and give you your weekly stats! Enter in your activity, and it will populate into charts to display all of your effort. Let's get moving! This app was built using MongoDB, Mongoose, Express, Node, JavaScript, and CSS.",
    github: "https://github.com/Crowe828/fit-tracker",
    appLink: "https://peaceful-anchorage-10949.herokuapp.com",
    img: FitTracker,
  },
  {
    id: 6,
    name: "BurgerTime",
    description:
      "Named after the famed Nintendo game, BurgerTime is an application that lets users input the names of burgers they'd like to eat as well as ones that they have previously eaten. Reach your burger consumption goals with BurgerTime! This application was built using MySQL, Express, Node, JavaScript, HTML, and CSS.",
    github: "https://github.com/Crowe828/burger",
    appLink: "https://shrouded-plateau-24290.herokuapp.com",
    img: BurgerTime,
  },
  {
    id: 7,
    name: "Note Taker",
    description:
      "A simple web application that allows users to create, read, update, and delete notes. It was built using Express, Node, uuid, JavaScript, HTML, and CSS.",
    github: "https://github.com/Crowe828/note-taker",
    appLink: "https://dry-dawn-05181.herokuapp.com/notes",
    img: NoteTaker,
  },
];

export default function AllProjects() {
  return (
    <div className="container portfolio" id="projects">
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
