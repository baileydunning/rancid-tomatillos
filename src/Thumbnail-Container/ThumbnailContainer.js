import React from 'react';
import Thumbnail from '../Thumbnail/Thumbnail.js'
import './ThumbnailContainer.scss'

const ThumbnailContainer = ({ movies, displayMovie }) => {
  const allMovies = movies.map(movie => {
    return (
      <Thumbnail
        key = { movie.id }
        poster = { movie.poster_path }
        backdrop = { movie.backdrop_path }
        title = { movie.title }
        rating = { movie.average_rating }
        releaseDate = { movie.release_date }
        id = { movie.id }
        displayMovie = { displayMovie }
      />
    )
  })

  return (
    <section className='thumbnail-container'>
      { allMovies }
    </section>
  )
}

export default ThumbnailContainer
