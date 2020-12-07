import React from 'react';
import './Thumbnail.scss';

const Thumbnail = ({ poster, title, rating, id, displayMovie }) => {
  return (
    <section className='thumbnail' data-testid="individual-thumbnail">
      <button
        onClick={() => { return displayMovie(id) }}>
        <img alt='movie-poster' className="movie-poster-image" src={ poster }></img>
      </button>
      <div className="thumbnail-display-info">
        <h3>{title}</h3>
        <p><b>Average Rating: </b>{rating.toFixed(1)}</p>
      </div>
    </section>
  )
}

export default Thumbnail
