import React, { Component } from 'react';
import ThumbnailContainer from '../Thumbnail-Container/ThumbnailContainer.js'
import Header from '../Header/Header.js';
import Movie from '../Movie/Movie.js';
import Search from '../Search/Search.js';
import { getAllMovies, getMovieData } from '../apiCalls.js'
import '../App/App.scss';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      userInput: '',
      selectedMovie: null,
      error: ''
    }
  }

  componentDidMount = () => {
    getAllMovies()
    .then((data) => {
      this.setState({ movies: data.movies })
    })
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

  get filteredMovies() {
    const newInput = this.state.userInput.toLowerCase().trim()
    const userSearchResults = this.state.movies.filter(movie => {
      return movie.title.toLowerCase().includes(newInput)
    })
    
    return newInput ? userSearchResults : this.state.movies
  }

  updateText = (input) => {
    this.setState({ userInput: input })
  }

  render() {
    return (
      <main className='App'>
        <Header displayHome={ this.displayHome }/>
        { this.state.error && <h2>{ this.state.error }</h2>}
        { !this.state.movies.length && <h2>Loading...</h2> }
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
          />
        }
      </main>
    )
  }
}

export default App