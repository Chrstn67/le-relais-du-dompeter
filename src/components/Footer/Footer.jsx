import { Link } from "react-router-dom";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <img
        className="logo"
        src="LogoDompeter.png"
        alt="Logo relais du Dompeter"
      />

      <ul>
        {/* <li>
              <Link to="/conditions-generales-d-utilisation">
                Conditions générales d&#39;utilisation
              </Link>
            </li> */}
        <p>
          &copy; {new Date().getFullYear()} Relais du Dompeter. <br /> Tous
          droits réservés.
        </p>
        <li>
          <Link to="/mentions-legales">Mentions légales</Link>
        </li>
      </ul>

      <img className="logoDev" src="Logo.jpg" alt="Logo développeur" />
    </footer>
  );
};

export default Footer;
