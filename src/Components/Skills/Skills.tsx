import WomanAndMan from "../../img/woman-and-man.png";
import "./skills.css";

const Skills = () => {
  return (
    <div className="row">
      <div className="column">
        <img src={WomanAndMan} alt="Woman and Man" />
      </div>
      <div className="column column-skills">
        <h1 className="text-skills">
          I like when my components are scalable and reusable. I mainly use
          React and TypeScript.
        </h1>
      </div>
    </div>
  );
};

export default Skills;
