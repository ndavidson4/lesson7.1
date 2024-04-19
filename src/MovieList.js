import React, { useState } from "react";
import Movie from "./Movie";

const moviesData = [
  { id: 1, title: "Inception", director: "Christopher Nolan" },
  { id: 2, title: "The Shawshank Redemption", director: "Frank Darabont" },
  { id: 3, title: "The Godfather", director: "Francis Ford Coppola" },
  { id: 4, title: "Pulp Fiction", director: "Quentin Tarantino" },
  { id: 5, title: "The Dark Knight", director: "Christopher Nolan" }
];

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = id => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  return (
    <div>
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} onDelete={deleteMovie} />
      ))}
    </div>
  );
};

export default MovieList;
