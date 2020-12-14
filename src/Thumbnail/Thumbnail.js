import React from 'react';
import { Link } from 'react-router-dom'
import './Thumbnail.scss';

const Thumbnail = ({ poster, title, rating, id }) => {
  return (
    <section
      className='thumbnail'
      data-testid="individual-thumbnail"
      key={`thumbnail-${title}`}>
      <Link to={`/movie/${id}`}>
        <img
          alt={`movie-poster-${id}`}
          className="movie-poster-image"
          src={ poster }></img>
      </Link>
      <div className="thumbnail-display-info">
        <h3>{title}</h3>
        <p><i>Avg Rating: {rating.toFixed(0)}</i></p>
      </div>
    </section>
  )
}

export default Thumbnail
