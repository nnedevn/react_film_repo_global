import React, { Component } from 'react';
import './App.css';

// Import Components
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';

//Import Films
import TMDB from './TMDB';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }


  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={TMDB} />
          <FilmDetails />
        </div>
      </div>
    );
  }
}

export default App;
