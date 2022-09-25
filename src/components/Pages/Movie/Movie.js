import React from "react";
import { useLocation } from "react-router-dom";
import "./Movie.css";
import Button from "react-bootstrap/Button";
import StarRating from "../../UI/StarRating/StarRating";
import { useState, useEffect } from "react";

const Movie = (props) => {
  const [favorite, setFavorite] = useState(false);
  const location = useLocation();
  const data = location.state;

  const addToFavorites = () => {
    setFavorite(!favorite);
  };

  useEffect(() => {
    console.log(data);
  }, []);

  const removeTags = (myString) => {
    return myString.replace(/(<([^>]+)>)/gi, "");
  };
  return (
    <div className="movie-container-wrapper">
      <div className="movie-container">
        <img src={`${data.image.medium}`} alt="" />
        <div className="movie-data">
          <h1>{data.name}</h1>
          {data.genres &&
            data.genres.map((genre, index) => <li key={index}>{genre}</li>)}
          <p>{removeTags(data.summary)}</p>
          <a href={`${data.officialSite}`}>Visit Website</a>
          <form className="add-to-favorites" action="">
            {!favorite ? (
              <Button onClick={addToFavorites} variant="success">
                Add To Favorites
              </Button>
            ) : (
              <Button onClick={addToFavorites} variant="warning">
                Remove From Favorites
              </Button>
            )}
          </form>
        </div>
      </div>
      <div className="rating-wrapper">
        <h1>Your Review</h1>
        <StarRating></StarRating>
        <textarea
          name="fav-movie-textarea"
          id="fav-movie-textarea"
          cols="5"
          rows="5"
        ></textarea>
      </div>
    </div>
  );
};

export default Movie;
