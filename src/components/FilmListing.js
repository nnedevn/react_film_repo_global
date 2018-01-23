import React, { Component } from 'react';
import FilmRow from './FilmRow';


class FilmListings extends Component {

  render() {
    const allFilms = this.props.films.films.map((item) => (
      <FilmRow key={item.id} film={item} handleChildClick={this.props.handleChildClick} />
    ));
    return (
      <div className="film-list">
        <h1 className="section-title">FILMS</h1>
        <div>
          {(allFilms)}
        </div>
      </div>
    )
  }
}

export default FilmListings


