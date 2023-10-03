import Reveal from "./Reveal";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const RevealWrapper = () => {
  const backToTop = () =>
    document.body.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Reveal>
        <Intro />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Skills />
      </Reveal>
      <Reveal>
        <Work />
        <button onClick={() => backToTop()}>
          Top <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </Reveal>
    </>
  );
};

export default RevealWrapper;
