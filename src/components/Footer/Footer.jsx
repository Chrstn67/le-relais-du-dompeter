import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="logo"
        src="LogoDompeter.png"
        alt="Logo relais du Dompeter"
      />
      <a
        href="https://www.facebook.com/evenloc67/?locale=fr_FR"
        target="_blank"
        rel="noopener noreferrer"
        title="Facebook"
      >
        <FaFacebook />
      </a>

      <div>
        <p>
          &copy; {new Date().getFullYear()} Relais du Dompeter. <br /> Tous
          droits réservés.
        </p>
        <p>
          <Link to="/mentions-legales">Mentions légales</Link>
        </p>
      </div>

      <img
        className="logoDev"
        src="Logo.jpg"
        alt="Logo de Christian HUMBERT, Développeur Web Frontend"
      />
    </footer>
  );
};

export default Footer;
