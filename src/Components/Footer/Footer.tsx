import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="row row-footer">
      <div className="column column-footer">
        <span className="text-footer">Thank you for stopping by! </span>
        <span>
          <a
            id="email"
            className="text-footer"
            href="mailto:crowe.dev@outlook.com?subject=Let's Work Together"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelopeOpenText} /> crowe.dev@outlook.com
          </a>
        </span>
      </div>
    </div>
  );
};

export default Footer;
