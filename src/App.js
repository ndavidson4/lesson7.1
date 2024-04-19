import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';
import Movie from './Movie.js';
import MovieList from "./MovieList";

function App() {
  return (
    <div>
      <h1>List of Movies:</h1>
      <div className="movie">
        <div className="movieRow">
          <div className="col-lg-4">
            <MovieList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;