import React, { Component } from 'react';
import movieData from './movieData.js';
import './css/App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: movieData
    }
  }

  render() {
    return (
      <main>
        <h1>Rancid Tomatillos!</h1>
      </main>
    )
  }
}

export default App
