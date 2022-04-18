import React from "react";
import { useLocation } from "react-router-dom";
import "./Movie.css";

const Movie = (props) => {
  const location = useLocation();
  const data = location.state;
  return (
    <div className="movieContainer">
      <img src={`${data.image.medium}`} alt="" />
      <div className="movieData">
        <h1>{data.name}</h1>
        {data.genres &&
          data.genres.map((genre, index) => <li key={index}>{genre}</li>)}
        <p>{data.summary}</p>
        <a href={`${data.officialSite}`}>Visit Website</a>
      </div>
    </div>
  );
};

export default Movie;
