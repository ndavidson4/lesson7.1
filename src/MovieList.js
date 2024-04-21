import React, { useState } from "react";
import Movie from "./Movie";
import MovieList from './Movies.json';


export default function Movies() {
  // sets up and initalizes the state variable movies
  const [movies, setMovies] = useState(MovieList);

  // handler for deleting a movie 
  const deleteMovie = id => {
    // updates the movie varible
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  // iterates through the movieList 
  return (
    <div className="movie">
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} onDelete={deleteMovie} />
      ))}
    </div>
  );
};

//export default MovieList;
