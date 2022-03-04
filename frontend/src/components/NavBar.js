import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="header">
      <div className="header__logo">
        <a href="/">
          <img className="image" src="/images/medpharma.png" alt="logo" />
        </a>
      </div>
      <ul className="header__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/consulate">Consulting Room</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
