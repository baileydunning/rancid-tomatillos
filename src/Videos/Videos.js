import React from 'react'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Videos.scss'

const Videos = ({ videoData }) => {
  const reactPlayers = videoData.map((video, index) => {
    return (
      <div className="youtube-video">
        <ReactPlayer 
          key={index}
          width={'60vw'}
          playing={false} 
          url={`https://www.youtube.com/embed/${video.key}`} 
        />
      </div>
    )
  })

  return (
    <section className="videos-section">
      <Carousel showThumbs={false}>
        {reactPlayers}
      </Carousel>
    </section>
  )
}

export default Videos