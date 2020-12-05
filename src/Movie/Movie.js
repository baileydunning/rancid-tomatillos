import React from 'react'
import './Movie.scss'

const Movie = ({ movie }) => {
  const genres = movie.genres.map(genre =>{
    return (
      <p>{ genre }</p>
    )
  }) 

  return (
    <section className='movie-section' style={{ background: `url(${ movie.backdrop_path })`}}>
      <article className="movie-info">
        <img src={ movie.poster_path } alt="movie-poster" className="movie-poster"></img>
        <div className="movie-text">
          <h2>{ movie.title }</h2>
          <h3>{ movie.tagline }</h3>
          <p>{ movie.overview }</p>
          <p><b>Average Rating:</b> { movie.average_rating.toFixed(1) }</p>
          <p><b>Release Date:</b> { new Date(movie.release_date).toDateString() }</p>
          <p><b>Runtime:</b> { movie.runtime } minutes</p>
          { movie.budget > 0 && <p><b>Budget:</b> ${movie.budget}</p> }
          { movie.revenue > 0 && <p><b>Revenue:</b> ${ movie.revenue }</p> }
          <p><b>Genres:</b> { genres }</p>
        </div>
      </article>
    </section>
  )
}

export default Movie
