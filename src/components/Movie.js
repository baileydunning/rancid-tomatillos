import React from 'react'
import '../css/Movie.scss'

const Movie = ({ movie }) => {
  return (
    <section className='movie-section' style={{ background: `url(${ movie.backdrop_path })`}}>
      <article className="movie-info">
        <img src={ movie.poster_path } alt="movie-poster" className="movie-poster"></img>
        <div className="movie-text">
          <h2>{movie.title}</h2>
          <p><b>Average Rating:</b> {movie.average_rating.toFixed(1)}</p>
          <p><b>Release Date:</b> {new Date(movie.release_date).toDateString()}</p>
        </div>
      </article>
    </section>
  )
}

export default Movie