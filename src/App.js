
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './Movie';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>List of Movies:</h1>
        <div className="movies row">
          <div className="col-lg-4">
            <Movie/>
          </div>
          <div className="col-lg-4">
            <Movie/>
          </div>
          <div className="col-lg-4">
            <Movie/>
          </div>
        </div>
    </div>
  );
}

export default App;
