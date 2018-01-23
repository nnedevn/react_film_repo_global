import React from 'react';
import FilmPoster from './FilmPoster';

const FilmRow = (props) => {
 
  const yearReleased = new Date (props.film.release_date).getFullYear();
  return (
    <div key={props.film.id} className="film-row">
      <FilmPoster film={props.film}/>
      <div className="film-summary">
        <h1>{props.film.title}</h1>
        <p>{yearReleased}</p>
      </div>
    </div>

  )
}
export default FilmRow


