import React from 'react';
import FilmPoster from './FilmPoster';


class FilmRow extends React.Component {
  render() {
    const yearReleased = new Date(this.props.film.release_date).getFullYear();
    return (
      <div key={this.props.film.id} className="film-row" onClick={(e) => { this.props.handleChildClick(this.props.film.id, e) }} >
        <FilmPoster film={this.props.film} />
        <div className="film-summary">
          <h1>{this.props.film.title}</h1>
          <p>{yearReleased}</p>
        </div>
      </div>
    )
  }
}


export default FilmRow


