import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="row row-footer">
      <div className="column">
        <span className="text-footer">Feel free to reach out anytime.</span>
        <span className="text-footer">
          <FontAwesomeIcon icon={faEnvelopeOpenText} />{" "}
          <a
            id="email"
            className="text-footer"
            href="mailto:crowe.dev@outlook.com?subject=Let's Work Together"
            target="_blank"
            rel="noopener noreferrer"
          >
            crowe.dev@outlook.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
