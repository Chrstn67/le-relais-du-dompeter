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
import { GrRestaurant } from "react-icons/gr";

import "./Navbar.scss";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const navItems = [
    { to: "/", icon: <FaHome />, text: "Accueil" },
    { to: "/logements", icon: <FaHotel />, text: "Logements" },
    { to: "/autour-de-vous", icon: <FaMap />, text: "Autour de vous" },
    { to: "/gastronomie", icon: <GrRestaurant />, text: "Gastronomie" },
    { to: "/infos-pratiques", icon: <FaInfo />, text: "Infos pratiques" },
    { to: "/contact", icon: <FaEnvelope />, text: "Contact" },
  ];

  return (
    <nav>
      <div className="container">
        <h1>Relais du Dompeter</h1>

        <div className="menu-items">
          {navItems.map((item, index) => (
            <Link key={index} to={item.to}>
              <span className="icone">
                {item.icon}
                <span>{item.text}</span>
              </span>
            </Link>
          ))}
        </div>
        <div className="menu-icon" onClick={toggleNav}>
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {navOpen && (
        <div className="mobile-menu">
          {navItems.map((item, index) => (
            <Link key={index} to={item.to}>
              <span className="icone">
                {item.icon}
                <span>{item.text}</span>
              </span>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
