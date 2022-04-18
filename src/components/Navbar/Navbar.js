import React from "react";
import "./Navbar.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navigation">
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <h1>Movies Collection</h1>
        </Link>
        <form action="" className="search-form-wrapper">
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
