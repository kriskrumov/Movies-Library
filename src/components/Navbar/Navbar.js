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
        <div className="login-register">
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              color: "black",
              marginRight: "5",
            }}
          >
            Login
          </Link>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            Register
          </Link>
        </div>
        <form action="" className="search-form-wrapper">
          <input type="text" />
          <button type="submit">Search</button>
        </form>
      </nav>
    </div>
  );
};

export default Navbar;
