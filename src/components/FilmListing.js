import React from 'react';
import FilmRow from './FilmRow';

const FilmListings = (props) => {
  const allFilms = props.films.films.map((item) => (
    <FilmRow film={item}/>
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
export default FilmListings


