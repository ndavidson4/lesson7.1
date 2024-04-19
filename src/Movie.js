import React from "react";

const Movie = ({ movie, onDelete }) => {
  return (
    <div className="movie">
      <h2>{movie.title}</h2>
      <p>Director: {movie.director}</p>
      <button onClick={() => onDelete(movie.id)}>Delete</button>
    </div>
  );
};

export default Movie;
