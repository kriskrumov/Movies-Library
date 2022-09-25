import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import "./MovieCard.css";
import "boxicons";

const MovieCard = (props) => {
  return (
    <div className="card-container">
      <Link
        to={`/search/${props.id}`}
        state={{
          name: props.name,
          id: props.id,
          summary: props.summary,
          image: props.image,
          genres: props.genres,
          officialSite: props.officialSite,
          rating: props.rating,
          network: props.network,
        }}
      >
        <Card
          style={{
            width: "18rem",
            height: "32rem",
          }}
        >
          <Card.Img
            className="cardImg"
            variant="top"
            src={props.image.medium}
          />
          <Card.Body>
            <Card.Title className="cardTitle">{props.name}</Card.Title>
            <div className="cardRating">
              <box-icon type="logo" name="imdb"></box-icon>
              <h3>{props.rating}</h3>
            </div>
          </Card.Body>
        </Card>
      </Link>
    </div>
  );
};

export default MovieCard;
