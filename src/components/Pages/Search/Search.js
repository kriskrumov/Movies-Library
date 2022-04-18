import React from "react";
import "./Search.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import MovieCard from "../../MovieCard/MovieCard";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";
const Search = () => {
  const [search, setSearch] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get("https://api.tvmaze.com/shows");
        setData(response.data);
        setError(null);
        console.log(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const getSearchValue = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div className="search-page">
      <div className="search-form-page">
        <h1>Search Movie</h1>
        <form action="" className="search-form-wrapper">
          <input
            type="text"
            placeholder="search movie by title"
            onChange={getSearchValue}
          />
          <button type="submit">Search</button>
        </form>
      </div>

      <div className="searched-shows">
        <h1>Shows</h1>
        <p>{search}</p>
      </div>
      <div>
        <ul className="movie-list">
          {error && <ErrorModal error={error} />}
          {loading && (
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          )}
          {data &&
            data
              .filter((val) => {
                if (search == "") {
                  return val;
                } else if (
                  val.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return val;
                }
              })
              .map(({ id, name, image, summary }) => (
                <li key={id}>
                  <MovieCard
                    id={id}
                    name={name}
                    image={image}
                    summary={summary}
                  />
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
};

export default Search;
