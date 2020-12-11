import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header.js'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'

describe('Header', () => {
  const mockDisplayHome = jest.fn()
  const history = createMemoryHistory()

  beforeEach(() => {
    render(
      <Router history = { history }>
        <Header
          selectedMovie={ null }
          displayHome={ mockDisplayHome }
        />
      </Router>
    )
  })

  it('should render a header', () => {
    let header = screen.getByText("RANCID TOMATILLOS")
    expect(header).toBeInTheDocument();
  })

  it('should call displayHome', () => {
    let headerButton = screen.getByRole("button")
    fireEvent.click(headerButton)
    expect(mockDisplayHome).toHaveBeenCalled()
  })
})
