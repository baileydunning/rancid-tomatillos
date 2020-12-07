import React from 'react'
import './Movie.scss'

const Movie = ({ movie, video }) => {
  const genres = movie.genres.map(genre => {
    return (
      <li key={genre}>{ genre }</li>
    )
  })

  const convertNumber = (num, type) => {
    return (
      num > 0 && <p><b>{ type }:</b> ${new Intl.NumberFormat('en-US').format(num)}</p>
    )
  }
  console.log(video);
  return (
    <section className='movie-section'>
      <article className="movie-info">
        <img src={movie.poster_path} alt="movie-poster" className="movie-poster"></img>
        <div className="movie-text">
          <h2>{ movie.title }</h2>
          { movie.tagline && <h3>{ movie.tagline }</h3> }
          <p>{ movie.overview }</p>
        </div>
        </article>
        <article className="more-info">
          <p><b>Average Rating:</b> { movie.average_rating.toFixed(1) }</p>
          <p><b>Release Date:</b> { new Date(movie.release_date).toDateString() }</p>
          <p><b>Runtime:</b> { movie.runtime } minutes</p>
          { convertNumber(movie.budget, 'Budget') }
          { convertNumber(movie.revenue, 'Revenue') }
      </article>
      <div className="genres">
        <ul>{genres}</ul>
        { video && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> }
      </div>
    </section>
  )
}

export default Movie
