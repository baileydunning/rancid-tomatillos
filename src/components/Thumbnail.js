import React from 'react';
import '../css/Thumbnail.scss';


const Thumbnail = ({poster, title, rating}) => {
  return (
    <section className='thumbnail'>
      <img alt='movie-poster' src={ poster }></img>
      <p>{ title }</p>
      <p>{ rating.toFixed(1)}</p>

    </section>
  )
}

export default Thumbnail
