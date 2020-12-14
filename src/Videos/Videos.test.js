import React from 'react'
import { screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Videos from './Videos.js'

describe('Videos', () => {
  const videoData = [
    {
      "id": 329,
      "movie_id": 659991,
      "key": "tJHcv0Pm0RU",
      "site": "YouTube",
      "type": "Trailer"
    },
    {
      "id": 330,
      "movie_id": 659991,
      "key": "IpSK2CsKULg",
      "site": "YouTube",
      "type": "Teaser"
    }
  ]

  beforeEach(() => {
    render(<Videos videoData={ videoData } key={ 659991 }/>)
  })

  it('should render the Videos component', () => {
    const videosSection = screen.getByTestId('videos-section')

    expect(videosSection).toBeInTheDocument()
  })

  it('should render each movie from array given in props', () => {
    const reactPlayers = screen.getAllByTestId('react-player')

    expect(reactPlayers.length).toBe(2)
    expect(reactPlayers[0]).toBeInTheDocument()
    expect(reactPlayers[1]).toBeInTheDocument()
  })
})
