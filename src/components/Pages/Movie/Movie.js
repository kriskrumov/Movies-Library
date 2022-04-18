import React from "react";
import { useLocation } from "react-router-dom";

const Movie = (props) => {
  const location = useLocation();
  const data = location.state;
  return (
    <div>
      <h1>{data}</h1>
    </div>
  );
};

export default Movie;
