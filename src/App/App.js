import React, { Component } from 'react';
import ThumbnailContainer from '../Thumbnail-Container/ThumbnailContainer.js'
import Header from '../Header/Header.js';
import Movie from '../Movie/Movie.js';
import { getAllMovies, getMovieData } from '../apiCalls.js'
import '../App/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      selectedMovie: null,
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
      this.setState({ selectedMovie: null })
    )
  }

  displayMovie = (id) => {
    return (
      this.setState({ selectedMovie: this.findMovieById(id) })
    )
  }

  findMovieById = (id) => {
    getMovieData(id)
    .then(data => this.setState({ selectedMovie: data.movie }))
    .catch(error => this.setState({ error: error.message }))
  }

  render() {
    return (
      <main className='App'>
        <Header displayHome={this.displayHome}/>
        { !this.state.movies.length && <h2>Loading...</h2> }
        { !this.state.selectedMovie ?
          <ThumbnailContainer
            movies={this.state.movies}
            displayMovie={this.displayMovie}
          /> :
          <Movie
            movie={this.state.selectedMovie}
          />
        }
      </main>
    )
  }
}

export default App
