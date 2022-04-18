import "./App.css";
import Home from "./components/Pages/Home/Home";
import Search from "./components/Pages/Search/Search";
import Movie from "./components/Pages/Movie/Movie";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:id" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
