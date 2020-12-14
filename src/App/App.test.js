import App from './App'
import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import { getAllMovies, getMovieData, getVideoData } from '../apiCalls.js'
jest.mock('../apiCalls.js')


describe('App', () => {
  window.scrollTo = jest.fn()
  
  beforeEach(() => {
    getAllMovies.mockResolvedValue({
      movies: [
        {
          "id": 694919,
          "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
          "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
          "title": "Money Plane",
          "average_rating": 6.666666666666667,
          "release_date": "2020-09-29"
        }
      ]
    })

    getMovieData.mockResolvedValue({
      movie: {
        "id": 694919,
        "title": "Money Plane",
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "release_date": "2020-09-29",
        "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        "genres": [
          "Action"
        ],
        "budget": 0,
        "revenue": 0,
        "runtime": 82,
        "tagline": "",
        "average_rating": 6.666666666666667
      }
    })

    getVideoData.mockResolvedValue({
      videos: [
        {
          "id": 329,
          "movie_id": 694919,
          "key": "tJHcv0Pm0RU",
          "site": "YouTube",
          "type": "Trailer"
        }
      ]
    })

    render(<BrowserRouter><App /></BrowserRouter>)
  })

  it('should render App with fetched data', async () => {
    const header = screen.getByTestId('header-button')
    const fetchedMovie = await waitFor(() => screen.getByTestId("individual-thumbnail"))
  
    expect(header).toBeInTheDocument()
    expect(fetchedMovie).toBeInTheDocument()
  })

  it('should render Movie when clicked', async () => {
    const moviePoster = await waitFor(() => screen.getByAltText('movie-poster-694919'))
    userEvent.click(moviePoster)
    const fetchedMovieSection = await waitFor(() => screen.getByTestId('movie-section'))
    
    expect(fetchedMovieSection).toBeInTheDocument()
  })

  it('should return to the home page', async () => {
    getMovieData.mockResolvedValueOnce({
      movie: {
        "id": 694919,
        "title": "Money Plane",
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "release_date": "2020-09-29",
        "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        "genres": [
          "Action"
        ],
        "budget": 0,
        "revenue": 0,
        "runtime": 82,
        "tagline": "",
        "average_rating": 6.666666666666667
      }
    })

    userEvent.click(screen.getByAltText('movie-poster'))
    const fetchedMovie = await waitFor(() => screen.getByText('Genres:'))
    userEvent.click(screen.getByTestId('header-button'))
    const thumbnailContainer = screen.getByTestId('thumbnail-container')

    expect(thumbnailContainer).toBeInTheDocument()
    expect(fetchedMovie).not.toBeInTheDocument()
  })
})
