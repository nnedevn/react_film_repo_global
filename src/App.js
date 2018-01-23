import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Import Components
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing />
          <FilmDetails />
        </div>
      </div>
    );
  }
}

export default App;
