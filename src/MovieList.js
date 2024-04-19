
import React, { useState } from "react";
import Movie from "./Movie";

const moviesData = [
  { id: 1, title: "The Batman", director: "Matt Reeves", stars: "Robert Pattinson, Zoe Kravitz" },
  { id: 2, title: "Turning Red", director: "Domee Shi", stars: "Roselie Chiang, Snadra Oh" },
  { id: 3, title: "Spider-Man: No Way Home", director: "Jon Watts", stars: "Tom Holland, Zendaya" },
  { id: 4, title: "How to Train Your Dragon", director: "Dean DeBlois and Chris Sanders", stars: "Jay Baruchel, Gerad Butler" },
  { id: 5, title: "Pulp Fiction", director: "Quentin Tarantino", stars: "John Travolta, Uma Thurman" }
];

const MovieList = () => {
  const [movies, setMovies] = useState(moviesData);

  const deleteMovie = id => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== id));
  };

  return (
    <div className="movie">
      {movies.map(movie => (
        <Movie key={movie.id} movie={movie} onDelete={deleteMovie} />
      ))}
    </div>
  );
};

export default MovieList;
