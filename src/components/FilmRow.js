import React from 'react';

const FilmRow = (props) => {
  return (
    <h1 key={props.film.id}>{props.film.title}</h1>
  )
}
export default FilmRow


