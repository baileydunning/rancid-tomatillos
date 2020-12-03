import React from 'react';
import '../css/Thumbnail.scss';

const Thumbnail = ({ poster, title, rating, id, displayMovie }) => {
  return (
    <section className='thumbnail'>
      <button 
        onClick={() => { return displayMovie(id) }}>
        <img alt='movie-poster' src={ poster }></img>
      </button>
      <p>{ title }</p>
      <p>{ rating.toFixed(1) }</p>

    </section>
  )
}

export default Thumbnail
