import React from 'react';
import { Link } from 'react-router-dom'
import './Thumbnail.scss';

const Thumbnail = ({ poster, title, rating, id, displayMovie }) => {
  return (
    <section className='thumbnail' data-testid="individual-thumbnail">
      <Link to={`/movie/${id}`}>
        <button
          onClick={() => { return displayMovie(id) }}>
          <img alt='movie-poster' className="movie-poster-image" src={ poster }></img>
        </button>
      </Link>
      <div className="thumbnail-display-info">
        <h3>{title}</h3>
        <p><i>Avg Rating: {rating.toFixed(0)}</i></p>
      </div>
    </section>
  )
}

export default Thumbnail
