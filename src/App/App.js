import React, { Component } from 'react';
import ThumbnailContainer from '../Thumbnail-Container/ThumbnailContainer.js'
import Header from '../Header/Header.js';
import Movie from '../Movie/Movie.js';
import { movieData } from '../movieData.js';
import '../App/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData,
      selectedMovie: null
    }
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
    return (
      this.state.movies.find(movie => {
        return movie.id === id
      })
    )
  }

  render() {
    return (
      <main className='App'>
      <Header displayHome={this.displayHome}/>
        { !this.state.selectedMovie ?
        <ThumbnailContainer
          movies={this.state.movies}
          displayMovie={this.displayMovie}
        />
        : <Movie movie={this.state.selectedMovie}/> }
      </main>
    )
  }
}

export default App
