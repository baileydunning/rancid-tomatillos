import React from 'react';
import '../css/ThumbnailContainer.scss'

const ThumbnailContainer = (props) => {
  const thumbnails = this.props.movies.map(movie => {
    return (
      <Thumbnail
        title={movie.title}
      />
    )
  })
}

export default ThumbnailContainer
