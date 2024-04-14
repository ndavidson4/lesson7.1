import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Movie.css';
import Movie from './Movie.js';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//<Route path='https://ndavidson4.github.io/lesson7.1/' element={<RequireAuthRoute><Explorer /></RequireAuthRoute>}/>

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/movies" element={<Movies />} />
        </Routes>
      </Router>
    </div>
  );
}

function Movies() {
  return (
    <div>
      <h1>List of Movies:</h1>
      <div className="Movies row">
        <div className="col-lg-4">
          <Movie />
        </div>
        <div className="col-lg-4">
          <Movie />
        </div>
        <div className="col-lg-4">
          <Movie />
        </div>
      </div>
    </div>
  );
}

export default App;