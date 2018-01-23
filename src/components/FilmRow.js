import React from 'react';
import FilmPoster from './FilmPoster';


class FilmRow extends React.Component{

    render(){
      const yearReleased = new Date (this.props.film.release_date).getFullYear();
  return (
    <div key={this.props.film.id} className="film-row" >
      <FilmPoster film={this.props.film}/>
      <div className="film-summary">
        <h1>{this.props.film.title}</h1>
        <p>{yearReleased}</p>
      </div>
    </div>
  )
    }
   
}


export default FilmRow


