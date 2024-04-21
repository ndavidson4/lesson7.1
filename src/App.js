import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';
import Movie from './Movie.js';
import MovieList from "./MovieList";

function App() {
  return (
    <div>
      <div className="movie">
        <h1>List of Movies:</h1>

        <div className="row">
          <div className="col-lg-12">
            <MovieList />
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;