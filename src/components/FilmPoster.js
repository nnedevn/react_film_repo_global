import React from 'react';

const FilmPoster = (props) => {
  const imgUrl = "https://image.tmdb.org/t/p/w780/" + props.film.poster_path;
  return (
    <img src={imgUrl} alt="" />
  )
}
export default FilmPoster


