import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header>
      <div className="logo">
        <h3>pokemon</h3>
        <img src={process.env.PUBLIC_URL + "/images/logo.png"} />
      </div>
      <nav className={open ? "navbar active" : "navbar"}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/pokedex" onClick={() => setOpen(false)}>
          Pokedex
        </Link>
        <a href="#">Product</a>
        <Link to="/event" onClick={() => setOpen(false)}>
          Event
        </Link>
      </nav>

      <div
        id="menu-btn"
        onClick={() => setOpen(!open)}
        className={open ? "fas fa-times" : "fas fa-bars"}
      ></div>
    </header>
  );
};

export default Navbar;
