import { Link } from "react-router-dom";
import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaHotel,
  FaInfo,
  FaMap,
  FaEnvelope,
} from "react-icons/fa";

import "./Navbar.scss";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav>
      <div className="container">
        <h1>Relais du Dompeter</h1>

        <div className="menu-items">
          <Link to="/">
            <span>
              <FaHome />
              <span>Accueil</span>
            </span>
          </Link>
          <Link to="/logements">
            <span>
              <FaHotel />
              <span>Logements</span>
            </span>
          </Link>
          <Link to="/autour-de-vous">
            <span>
              <FaMap />
              <span>Autour de vous</span>
            </span>
          </Link>
          <Link to="/infos-pratiques">
            <span>
              <FaInfo />
              <span>Infos pratiques</span>
            </span>
          </Link>
          <Link to="/contact">
            <span>
              <FaEnvelope />
              <span>Contact</span>
            </span>
          </Link>
        </div>
        <div className="menu-icon" onClick={toggleNav}>
          {navOpen ? (
            <FaTimes onClick={toggleNav} />
          ) : (
            <FaBars onClick={toggleNav} />
          )}
        </div>
      </div>

      {navOpen && (
        <div className="mobile-menu">
          <Link to="/accueil">
            <span>
              <FaHome />
              <span>Accueil</span>
            </span>
          </Link>
          <Link to="/logements">
            <span>
              <FaHotel />
              <span>Logements</span>
            </span>
          </Link>
          <Link to="/autour-de-vous">
            <span>
              <FaMap />
              <span>Autour de vous</span>
            </span>
          </Link>
          <Link to="/infos-pratiques">
            <span>
              <FaInfo />
              <span>Infos pratiques</span>
            </span>
          </Link>
          <Link to="/contact">
            <span>
              <FaEnvelope />
              <span>Contact</span>
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
