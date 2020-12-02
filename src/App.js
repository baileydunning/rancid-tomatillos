import React, { Component } from 'react';
import ThumbnailContainer from './components/ThumbnailContainer.js'
import Header from './components/Header.js'
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

  render() {
    return (
      <main className='App'>
      <Header />
      <ThumbnailContainer movies={ this.state.movies }/>
      </main>
    )
  }
}

export default App
