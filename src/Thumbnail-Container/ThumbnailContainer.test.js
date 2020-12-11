import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ThumbnailContainer from './ThumbnailContainer.js'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { sampleData } from '../movieData.js'

describe('ThumbnailContainer', () => {
  const mockDisplayMovie = jest.fn()
  const history = createMemoryHistory()

  beforeEach(() => {
    render(
      <Router history={ history }>
        <ThumbnailContainer
          displayMovie = { mockDisplayMovie }
          movies = { sampleData }
        />
      </Router>
    )
  })

  it('should render all movie thumbnails', () => {
    const thumbnails = screen.getByTestId('thumbnail-container')
    expect(history.location.pathname).toBe('/')
    expect(thumbnails).toBeInTheDocument()
  })
})
