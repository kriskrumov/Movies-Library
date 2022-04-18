import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <div className="card-container">
      <Card
        style={{
          width: "18rem",
          height: "32rem",
        }}
      >
        <Card.Img variant="top" src={props.image.medium} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Link
            to={`/search/${props.id}`}
            state={{
              name: props.name,
              id: props.id,
              summary: props.summary,
              image: props.image,
              genres: props.genres,
              officialSite: props.officialSite,
            }}
          >
            <Button variant="primary">Go somewhere</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
