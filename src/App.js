import React, { Component } from 'react';
import ThumbnailContainer from './components/ThumbnailContainer.js'
import movieData from './movieData.js';
import './css/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData
    }
  }

  render() {
    return (
      <main className='App'>
        <h1>Rancid Tomatillos!</h1>
        <ThumbnailContainer movies={ this.state.movies }/>
      </main>
    )
  }
}

export default App
