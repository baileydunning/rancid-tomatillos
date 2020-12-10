import App from './App';
import React from 'react'
import { screen, render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';
import { getAllMovies, getMovieData } from '../apiCalls.js'
jest.mock('../apiCalls.js')


describe('App', () => {
  beforeEach(() => {
    getAllMovies.mockResolvedValueOnce({
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

    render(<BrowserRouter><App /></BrowserRouter>)
  })

  it('should render App with fetched data', async () => {
    const header = screen.getByText('RANCID TOMATILLOS')
    const fetchedMovie = await waitFor(() => screen.getByTestId("individual-thumbnail"))

    expect(header).toBeInTheDocument()
    expect(fetchedMovie).toBeInTheDocument()
  })

  it('should render Movie when clicked', async () => {
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
    fireEvent.click(screen.getByAltText('movie-poster'))
    const fetchedMovie = await waitFor(() => screen.getByText('82 minutes'))
    expect(fetchedMovie).toBeInTheDocument()
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

    fireEvent.click(screen.getByAltText('movie-poster'))
    const fetchedMovie = await waitFor(() => screen.getByText('82 minutes'))
    fireEvent.click(screen.getByText("RANCID TOMATILLOS"))
    const thumbnailContainer = screen.getByTestId('thumbnail-container')

    expect(thumbnailContainer).toBeInTheDocument()
    expect(fetchedMovie).not.toBeInTheDocument()
  })
})
