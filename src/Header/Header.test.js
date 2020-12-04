import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from './Header.js'

describe('Header', () => {
  const mockDisplayHome = jest.fn()

  beforeEach(() => {
    render(<Header
      displayHome={mockDisplayHome}
    />)
  })

  it('should render a header', () => {
    //setup & execution
    let header = screen.getByText("Rancid Tomatillos!")
    //assertion
    expect(header).toBeInTheDocument();
  })

  it('should call displayHome', () => {
    let headerButton = screen.getByRole("button")
    fireEvent.click(headerButton)
    expect(mockDisplayHome).toHaveBeenCalled()
  })
})
