import React from 'react'
import ReactPlayer from 'react-player'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Videos.scss'

const Videos = ({ videoData }) => {
  let renderThumbs = (children) => {
    return children.map(child => {
      return <img 
                src={ `https://img.youtube.com/vi/${child.props.children.props.videokey}/default.jpg` } 
                alt={ `youtube-thumbnail-${child.key}` } 
                key={ child.key }
              />
  }) 
}

  const reactPlayers = videoData.map(video => {
    return (
      <div className="youtube-video" key={ video.id }>
        <ReactPlayer 
          key={ video.id }
          videokey={ video.key }
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
      <Carousel renderThumbs={ renderThumbs }>
        { reactPlayers }
      </Carousel>
    </section>
  )
}

export default Videos