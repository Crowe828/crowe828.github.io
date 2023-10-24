import SpotifyImg from "../../img/spotify-player.png";
import Inkmap from "../../img/inkmap.png";
import "./work.css";

const Work = () => {
  return (
    <div className="row row-work">
      <div className="column column-work">
        <div className="column column-personal-projects">
          <h1 className="personal-projects-title">Personal Projects</h1>
          <a
            href="https://spotify-mini.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="spotify-mini-title">Spotify Mini</h3>
          </a>
          <a
            href="https://spotify-mini.web.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="portfolio-img"
              src={SpotifyImg}
              alt="screenshot of Spotify Mini player"
            />
          </a>
          <a
            href="https://github.com/Crowe828/spotify-mini"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="github-link">GitHub Repo</h5>
          </a>
        </div>
        <div className="column column-personal-projects">
          <a
            href="https://christianrowe.dev/inkmap/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="portfolio-title">InkMap</h3>
          </a>
          <a
            href="https://christianrowe.dev/inkmap/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="portfolio-img"
              src={Inkmap}
              alt="screenshot of InkMap's splash page"
            />
          </a>
          <a
            href="https://github.com/Crowe828/inkmap"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="github-link">GitHub Repo</h5>
          </a>
        </div>
        <h1 className="text-work">
          When I'm not working with clients to solve their development needs,
          I'm either outside running or inside reading. Currently working on an
          internal app for a client that is used by hundreds of their employees.
          The UI is built on React, Redux, TypeScript, HTML, CSS, vanilla
          JavaScript, and Node.
        </h1>
      </div>
    </div>
  );
};

export default Work;
