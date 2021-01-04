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
      "A web app that lets users search and save their favorite anime and manga. The app uses an MVC model that allows users to create an account using React, Redux, RESTful APIs, Axios, JSON, JWT, MongoDB, Mongoose, Express, Node, and the CSS frameworks Material-UI and Semantic UI.",
    github: "https://github.com/Crowe828/nipponmedia",
    appLink: "https://nipponmedia.herokuapp.com/",
    img: NipponMedia,
  },
  {
    id: 2,
    name: "Alien Town",
    description:
      "A web app designed for anyone interested in learning more about UFO sightings. Featuring a 30,000 record database that is searchable and can be updated. Sightings are listed on a map using the Google Maps API. Technologies used include JavaScript ES6, Handlebars, AJAX, Node, MySQL, and CSS framework Bulma.io.",
    github: "https://github.com/Crowe828/alientown",
    appLink: "https://mega-awesome.herokuapp.com",
    img: AlienTown,
  },
  {
    id: 3,
    name: "InkMap",
    description:
      "A web app that brings artists and art into one domain. Upon first visiting our app, users are shown a default search to display images of tattoos, and the addresses for local tattoo shops using the Foursquare API. Using the Unsplash API, users can search for tattoo ideas and they are dynamically rendered to the page. As of 2021, this application has been rebuilt using React!",
    github: "https://github.com/Crowe828/inkmap",
    appLink: "https://crowe828.github.io/inkmap",
    img: InkMap,
  },
  {
    id: 4,
    name: "Worker Library",
    description:
      "This application allows users to search through an employee database and filter users alphabetically. The search funtion filters data in real-time. This app was built using React, React Components, JavaScript ES6, CSS, and HTML.",
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
