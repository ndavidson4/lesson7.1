import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';
import Movie from './Movie';

function App() {
  return (
    <div className="App">
      <h1>List of Movies</h1>
      <div className="Movies row">
        <div className="col-lg-4">
          <Movie  /> 
        </div>
        <div className="col-lg-4">
          <Movie  /> 
        </div>
        <div className="col-lg-4">
          <Movie  /> 
        </div>
      </div>
    </div>
  );
}


export default App;