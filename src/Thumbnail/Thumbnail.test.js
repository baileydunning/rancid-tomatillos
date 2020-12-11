import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Thumbnail from './Thumbnail.js'

describe('Thumbnail', () => {
  const mockDisplayMovie = jest.fn()
  const history = createMemoryHistory()
  beforeEach(() => {
    render(
    <Router history={ history }>
      <Thumbnail
        key = { 1 }
        poster = { 'movie.poster_path' }
        backdrop = { 'movie.backdrop_path' }
        title = { 'Best Movie Ever!' }
        rating = { 7.444456 }
        releaseDate = { '2020-11-04' }
        id = { 17 }
        displayMovie={mockDisplayMovie}
      />
    </Router>)
  })

  it('should render a movie thumbnail', () => {
    const movieTitle = screen.getByText('Best Movie Ever!');
    const movieRating = screen.getByText('Avg Rating: 7');
    const moviePoster = screen.getByAltText('movie-poster')

    expect(movieTitle).toBeInTheDocument()
    expect(movieRating).toBeInTheDocument()
    expect(moviePoster).toBeInTheDocument()
  })

  it('should redirect to movie page on click', () => {
    expect(history.location.pathname).toBe('/')
    const moviePosterButton = screen.getByAltText('movie-poster');
    fireEvent.click(moviePosterButton)
    console.log(history.location)
    expect(history.location.pathname).toBe('/movie/17')
  })
})
