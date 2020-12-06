import React from 'react'
import Search from './Search'
import { screen, render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'

describe('Search', () => {
  const mockUpdateText = jest.fn()

  beforeEach(() => {
    render(<Search
        updateText={mockUpdateText}
      />)
  })

  it('should render the search bar', () => {
    const searchBar = screen.getByTestId('search-bar')
    expect(searchBar).toBeInTheDocument()
  })

  it('should update text on change', () => {
    const searchBar = screen.getByPlaceholderText('search-bar')
    userEvent.type(searchBar, "hello world")

    expect(mockUpdateText).toHaveBeenCalled()
    expect(searchBar.value).toContain("hello world")
  })
})
