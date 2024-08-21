import React, { useState } from "react";
import "../css files/Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (route) => {
    window.location.href = route;
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="brand">Boutrus' React</div>
      <div className="links">
        <ul className={`menu ${menuOpen ? "open" : ""}`}>
          <li>
            <button onClick={() => handleClick("/home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleClick("/contact")}>Contact</button>
          </li>
          <li>
            <button onClick={() => handleClick("/weather")}>Weather</button>
          </li>
          <li>
            <button onClick={() => handleClick("/about")}>About Us</button>
          </li>
        </ul>
        <button
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
