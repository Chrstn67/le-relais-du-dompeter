import { FaHome, FaHotel, FaInfo, FaMap, FaEnvelope } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-burger" onClick={toggleMenu}>
        ☰
      </div>
      <ul className={`navbar-list ${isMenuOpen ? "show" : ""}`}>
        <li className="navbar-item">
          <NavLink exact to="/" onClick={toggleMenu}>
            <FaHome /> Accueil
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/logements" onClick={toggleMenu}>
            <FaHotel /> Logements
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/autour-de-vous" onClick={toggleMenu}>
            <FaMap /> Autour de vous
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/gastronomie" onClick={toggleMenu}>
            <GrRestaurant /> Gastronomie
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/infos-pratiques" onClick={toggleMenu}>
            <FaInfo /> Infos Pratiques
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact" onClick={toggleMenu}>
            <FaEnvelope /> Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
