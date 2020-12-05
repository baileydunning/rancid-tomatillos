import App from './App';
import React from 'react'
import { screen, render, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { getAllMovies } from '../apiCalls.js'
jest.mock('../apiCalls.js')


describe('App', () => {
  it('should render App with fetched data', async () => {
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

    render(<App />)

    const header = screen.getByText('Rancid Tomatillos!')
    const fetchedMovie = await waitFor(() => screen.getByTestId("individual-thumbnail"))

    expect(header).toBeInTheDocument()
    expect(fetchedMovie).toBeInTheDocument()
  })

  it('should render Movie when clicked', () => {

  })
})
