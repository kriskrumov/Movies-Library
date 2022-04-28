import React from "react";
import "./Hero.css";
import Button from "react-bootstrap/Button";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="hero-content-wrapper">
        <h1>Movie-DB</h1>
        <p>The biggest movie library.</p>
        <Link to="/search">
          <Button>Movies</Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
