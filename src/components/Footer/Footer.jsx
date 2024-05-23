import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <ul className={style.links}>
        <li>
          <Link
            to="https://github.com/ShirefMohammed"
            target="_blank"
            className="first_btn"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </li>
        <li>
          <Link
            to="https://www.linkedin.com/in/shiref-mohammed-57342624b/"
            target="_blank"
            className="first_btn"
          >
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </li>
      </ul>

      <div className={style.created_by}>Created by Shiref Mohammed</div>
    </footer>
  );
};

export default Footer;
