import Reveal from "./Reveal";
import Intro from "../Intro/Intro";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Work from "../Work/Work";

const RevealWrapper = () => {
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
      </Reveal>
    </>
  );
};

export default RevealWrapper;
