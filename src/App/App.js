import React, { Component } from 'react'
import ThumbnailContainer from '../Thumbnail-Container/ThumbnailContainer.js'
import Header from '../Header/Header.js'
import Movie from '../Movie/Movie.js'
import Search from '../Search/Search.js'
import { getAllMovies, getMovieData, getVideoData} from '../apiCalls.js'
import '../App/App.scss'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      input: '',
      selectedMovie: null,
      selectedVideos: [],
      error: ''
    }
  }

  componentDidMount = () => {
    getAllMovies()
    .then(data => this.setState({ movies: data.movies }))
    .catch(error => this.setState({ error: error.message }))
  }

  displayHome = () => {
    return (
      this.setState({ selectedMovie: null, input: '', selectedVideos: [] })
    )
  }

  displayMovie = (id) => {
    return (
      // this.setState({ selectedMovie: this.findMovieById(id) })
      this.findMovieById(id)
    )
  }

  findMovieById = (id) => {
    getMovieData(id)
    .then((data) => {
      this.setState({ selectedMovie: data.movie })
      this.findVideos()
    })
    .catch(error => this.setState({ error: error.message }))
  }

  findVideos = () => {
    getVideoData(this.state.selectedMovie.id)
    .then(data => this.setState({ selectedVideos: data.videos }))
    .catch(error => this.setState({ error: error.message }))
  }

  get filteredMovies() {
    const newInput = this.state.input.toLowerCase().trim()
    const userSearchResults = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(newInput)
    })

    return newInput ? userSearchResults : this.state.movies
  }

  updateText = (userInput) => {
    this.setState({ input: userInput })
  }

  render() {
    return (
      <main className='App'>
        <Header
        selectedMovie={ this.state.selectedMovie }
        displayHome={ this.displayHome }
        />
        { this.state.error && <h2>{ this.state.error }</h2>}
        { !this.state.movies && <h2>Loading...</h2> }
        { !this.state.selectedMovie ?
          <section>
            <Search
              updateText={ this.updateText }
            />
            <ThumbnailContainer
              movies={this.filteredMovies}
              displayMovie={this.displayMovie}
            />
          </section> :
          <Movie
            key={ this.state.selectedMovie.id }
            movie={ this.state.selectedMovie }
            video={ this.state.selectedVideos.find(video => video.type === 'Trailer')}
          />
        }
      </main>
    )
  }
}

export default App
