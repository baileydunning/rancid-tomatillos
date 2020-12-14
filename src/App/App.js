import React, { Component } from 'react'
import ThumbnailContainer from '../Thumbnail-Container/ThumbnailContainer.js'
import Header from '../Header/Header.js'
import Movie from '../Movie/Movie.js'
import Search from '../Search/Search.js'
import RatingFilter from '../Rating-Filter/RatingFilter.js'
import { getAllMovies, getMovieData } from '../apiCalls.js'
import '../App/App.scss'
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      input: '',
      minRating: 0,
      maxRating: 10,
      selectedMovie: null,
      error: ''
    }
  }

  componentDidMount = () => {
    getAllMovies()
    .then(data => this.setState({ movies: data.movies }))
    .catch(error => this.setState({ error: error.message }))
  }

  selectMovie = (movie) => {
    this.setState({ selectedMovie: movie })
  }

  displayHome = () => {
    window.scrollTo(0, 0);
    return (
      this.setState({ selectedMovie: null, input: ''})
    )
  }

  displayMovie = (id) => {
    getMovieData(id)
    .then((data) => {
      this.setState({ selectedMovie: data.movie })
      this.findVideos()
    })
    .catch(error => this.setState({ error: error.message }))
  }

  get filteredMovies() {
    const newInput = this.state.input.toLowerCase().trim()
    const min = this.state.minRating;
    const max = this.state.maxRating;
    const userFilterResult = this.state.movies.filter(movie => {
      return movie.average_rating.toFixed(0) >= min && movie.average_rating.toFixed(0) <= max;
    })
    return userFilterResult.filter(movie => {
      return movie.title.toLowerCase().includes(newInput)
    })
  }

  updateText = (userInput) => {
    this.setState({ input: userInput })
  }

  updateRating = (min, max) => {
    this.setState({ minRating: min, maxRating: max })
  }

  showRatingFilter = () => {
    return (
      <RatingFilter
        updateRating={this.updateRating}
      />
    )
  }

  render() {
    return (
      <main className='App'>
        <Header
          selectedMovie={ this.state.selectedMovie }
          displayHome={ this.displayHome }
        />
        <Switch>
          <Route
            exact path={'/movie/:id'}
            render={ ({match}) => {
            return <Movie
              key={ match.params.id }
              id={ match.params.id }
              displayHome={ this.displayHome }
              selectMovie={ this.selectMovie }
            />
          }}
          />
          <Route
            path="/"
            render={ () => {
              return (
                <section>
                    <section className="search-area" style={{ backgroundColor: 'hsl(360, 0%, 13%)' }}>
                    <Search
                      updateText={this.updateText}
                    />
                    <RatingFilter
                      updateRating={this.updateRating}
                    />
                    </section>
                    <ThumbnailContainer
                      movies={ this.filteredMovies }
                      displayMovie={ this.displayMovie }
                    />
                </section> )
            }}
          />
        </Switch>
      </main>
    )
  }
}

export default App
