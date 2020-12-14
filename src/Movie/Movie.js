import React, { Component } from 'react'
import { getMovieData, getVideoData} from '../apiCalls.js'
import './Movie.scss'
import { Link } from 'react-router-dom'
import Videos from '../Videos/Videos.js'

class Movie extends Component {
  constructor() {
    super()
    this.state = {
      movie: null,
      videos: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getMovieData(this.props.id)
    .then((data) => {
      this.setState({ movie: data.movie })
      this.findVideos()
      this.props.selectMovie(this.state.movie)
    })
    .catch(error => this.setState({ error: error.message }))
  }

  findVideos = () => {
    getVideoData(this.state.movie.id)
    .then(data => this.setState({ videos: data.videos }))
    .catch(error => this.setState({ error: error.message }))
  }

  render() {
    if (this.state.movie) {
      const genres = this.state.movie.genres.map(genre => {
        return (<li key={genre}>{genre}</li>)
      })

      const convertNumber = (num, type) => {
        return (num > 0 && <p><b>{type}:</b> ${new Intl.NumberFormat('en-US').format(num)}</p>)
      }
      return (
        <section className='movie-section' data-testid="movie-section">
          <article className="movie-info">
            <img src={this.state.movie.poster_path} alt="movie-poster" className="movie-poster"></img>
            <div className="movie-text">
              <h2 className="movie-title">{ this.state.movie.title }</h2>
              { this.state.movie.tagline && <h3>{ this.state.movie.tagline }</h3> }
              <p>{ this.state.movie.overview }</p>
            </div>
          </article>
          <section className="details">
            <article className="more-info">
              <p><b>Average Rating:</b> { this.state.movie.average_rating.toFixed(1) }</p>
              <p><b>Release Date:</b> { new Date(this.state.movie.release_date).toDateString() }</p>
              <p><b>Runtime:</b> { this.state.movie.runtime } minutes</p>
              { convertNumber(this.state.movie.budget, 'Budget') }
              { convertNumber(this.state.movie.revenue, 'Revenue') }
              {genres && <section><p><b>Genres:</b></p><ul>{genres}</ul></section>}
              <Link to="/"><button onClick={() => this.props.displayHome()} className="back-button">Back to Main Page</button></Link>
            </article>
            <div>
              {this.state.videos && <Videos videoData={ this.state.videos } key={ this.state.movie.id }/>}
            </div>
          </section>
        </section>
      )
    } else {
      return <h3>Loading...</h3>
    }
  }
}

export default Movie
