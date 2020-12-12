import React from 'react'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Videos.scss'

const Videos = ({ videoData }) => {
  const reactPlayers = videoData.map(video => {
    return (
      <div className="youtube-video" key={ video.id }>
        <ReactPlayer 
          key={ video.id }
          width={ '60vw' }
          playing={ false } 
          url={ `https://www.youtube.com/embed/${video.key}` } 
          data-testid={ 'react-player' }
        />
      </div>
    )
  })

  return (
    <section className="videos-section" data-testid="videos-section">
      <Carousel showThumbs={ false }>
        { reactPlayers }
      </Carousel>
    </section>
  )
}

export default Videos