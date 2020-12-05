import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Movie from './Movie.js'

describe('Movie', () => {
  const movieObject = {
      "id": 659991,
      "title": "Made in Italy",
      "poster_path": "https://image.tmdb.org/t/p/original//erl30EcM8b8S84mvw8QXhNIeSfi.jpg",
      "backdrop_path": "https://image.tmdb.org/t/p/original//5nRyaVklxyA9OkxqZaPv1KBRqpd.jpg",
      "release_date": "2020-08-06",
      "overview": "A bohemian artist travels from London to Italy with his estranged son to sell the house they inherited from his late wife.",
      "genres": [
        "Comedy",
        "Drama"
      ],
      "budget": 0,
      "revenue": 0,
      "runtime": 94,
      "tagline": "",
      "average_rating": 5
  }

  beforeEach(() => {
    render(<Movie
      key={ movieObject.id }
      movie={ movieObject }
    />)
  })

  it('should render a movie with the correct data', () => {
    const movieTitle = screen.getByText('Made in Italy');
    const movieRating = screen.getByText('5.0');
    const moviePoster = screen.getByAltText('movie-poster')
    const releaseDate = screen.getByText('Wed Aug 05 2020')

    expect(movieTitle).toBeInTheDocument()
    expect(movieRating).toBeInTheDocument()
    expect(moviePoster).toBeInTheDocument()
    expect(releaseDate).toBeInTheDocument()
  })

})
