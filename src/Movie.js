import React from "react";
import "./Movie.css";
import Movies from "./MovieList";

const Movie = ({ movie, onDelete }) => {
  return (
    <div className="movie">
      <h2>Movie Title: {movie.title}</h2>
      <h4>Director: {movie.director}</h4>
      <p>Stars: {movie.stars}</p>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </div>
  );
};

export default Movie;
