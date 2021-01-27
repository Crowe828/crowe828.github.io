import React from "react";
import Project from "../Project";
import AlienTown from "./img/alientown.png";
import InkMap from "./img/inkmap.png";
import Instagram from "./img/instagram-lite.png";
import NipponMedia from "./img/nipponmedia.png";
import Spotify from "./img/spotify-mini.png";
import WorkerLibrary from "./img/worker-library.png";
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
    name: "Instagram Lite",
    description:
      "Using the Instagram app is way overrated. Instead, I made my own. Welcome to Instagram lite, a web app built using React, Firebase, and Material-UI. It features Firebase authentication, hosting, and data storage.",
    github: "https://github.com/Crowe828/instagram-lite",
    appLink: "https://instagram-lite-62791.web.app/",
    img: Instagram,
  },
  {
    id: 3,
    name: "Spotify Mini",
    description:
      "A Spotify web client to play all of your favorite songs. This app let's you login, play songs, pause, skip forward, and skip back. It is built using the Spotify Web API, authentication, React, Context-API, Material-UI, and Firebase hosting.",
    github: "https://github.com/Crowe828/spotify-mini",
    appLink: "https://spotify-mini.web.app/",
    img: Spotify,
  },
  {
    id: 4,
    name: "InkMap",
    description:
      "A web app that brings artists and art into one domain. Upon first visiting our app, users are shown a default search to display images of tattoos, and the addresses for local tattoo shops using the Foursquare API. Using the Unsplash API, users can search for tattoo ideas and they are dynamically rendered to the page. As of 2021, this application has been rebuilt using React!",
    github: "https://github.com/Crowe828/inkmap",
    appLink: "https://crowe828.github.io/inkmap",
    img: InkMap,
  },
  {
    id: 5,
    name: "Alien Town",
    description:
      "A web app designed for anyone interested in learning more about UFO sightings. Featuring a 30,000 record database that is searchable and can be updated. Technologies used include JavaScript ES6, MySQL, Node, Handlebars AJAX, and Bulma.io. This app features the Google Maps API to render coordinate-based data points, authorization, and full CRUD connected to a MySQL database.",
    github: "https://github.com/Crowe828/alientown",
    appLink: "https://mega-awesome.herokuapp.com",
    img: AlienTown,
  },
  {
    id: 6,
    name: "Worker Library",
    description:
      "This application allows users to search through an employee database and filter users alphabetically. The search funtion filters data in real-time. This app was built using React, React Components, JavaScript ES6, CSS, and HTML5.",
    github: "https://github.com/Crowe828/worker-library",
    appLink: "https://crowe828.github.io/worker-library",
    img: WorkerLibrary,
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
