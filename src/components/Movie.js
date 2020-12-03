import React from 'react'
import '../css/Movie.scss'

const Movie = ({ movie }) => {
  return (
    <section className='movieSection' style={{ background: `url(${ movie.backdrop_path })`}}>
      <h2>{movie.title}</h2>
      <article>
        <img src={ movie.poster_path } alt="movie-poster"></img>
        <p>{ movie.average_rating.toFixed(1) }</p>
        <p>{movie.release_date}</p>
      </article>
    </section>
  )
}

export default Movie