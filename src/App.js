import React, { Component } from 'react';
import ThumbnailContainer from './components/ThumbnailContainer.js'
import Header from './components/Header.js';
import Movie from './components/Movie.js';
import movieData from './movieData.js';
import './css/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData,
      isMain: true
    }
  }

  displayMovie = (id) => {
    return (
      this.setState({isMain: false})
    )
  }

  render() {
    return (
      <main className='App'>
      <Header />
      <ThumbnailContainer 
        movies={ this.state.movies } 
        displayMovie={ this.displayMovie }
      />
      </main>
    )
  }
}

export default App
