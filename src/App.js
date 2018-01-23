import React, { Component } from 'react';
import './App.css';

// Import Components
import FilmListing from './components/FilmListing';
import FilmDetails from './components/FilmDetails';

//Import Films
import TMDB from './TMDB.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      film: ''
    }
  }

  handleChildClick = (childData, event) => {
    console.log(TMDB.api_key)
    const url = `https://api.themoviedb.org/3/movie/${childData}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`;

    fetch(url).then(response => {
      response.json().then(data => {
        this.setState({
          film: data
        })
      })
    })

  }
  render() {
    return (
      <div className="App">
        <div className="film-library">
          <FilmListing films={TMDB} handleChildClick={this.handleChildClick} />
          <FilmDetails film={this.state.film} />
        </div>
      </div>
    );
  }
}

export default App;
