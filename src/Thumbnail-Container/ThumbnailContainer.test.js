import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import ThumbnailContainer from './ThumbnailContainer.js'
import Thumbnail from '../Thumbnail/Thumbnail.js'
import { sampleData } from '../movieData.js'

describe('ThumbnailContainer', () => {
  const mockDisplayMovie = jest.fn()

  beforeEach(() => {
    render(<ThumbnailContainer
      displayMovie = { mockDisplayMovie }
      movies = { sampleData }
    />)
  })

  it('should render all movie thumbnails', () => {
    const thumbnails = screen.getByTestId('thumbnail-container')
    expect(thumbnails).toBeInTheDocument()
  })

})
