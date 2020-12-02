import React from 'react'
import '../css/Movie.scss'

const Movie = ({ movie }) => {
  return (
    <section className='movieSection' style={{ background: `url(${ movie.backdrop_path })`}}>
      <h2>{movie.title}</h2>
    </section>
  )
}

export default Movie