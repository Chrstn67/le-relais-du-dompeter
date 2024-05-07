import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHome, FaHotel, FaInfo, FaMap, FaEnvelope } from "react-icons/fa";
import { GrRestaurant } from "react-icons/gr";
import "./Navbar.scss";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
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
    <nav className="Navbar">
      <div className="container">
        <ul className="menu-items">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.to}>
                <span className="icone">
                  {item.icon}
                  <span>{item.text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {navOpen && (
        <div className="mobile-menu">
          <ul>
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} onClick={closeNav}>
                  <span className="icone">
                    {item.icon}
                    <span>{item.text}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
