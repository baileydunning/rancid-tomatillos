import App from './App';
import React from 'react'
import { fireEvent, screen, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Movie from '../Movie/Movie.js'
import Header from '../Header/Header.js'
import ThumbnailContainer from '../Thumbnail-Container/ThumbnailContainer.js'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })
  it('should render the App component', () => {
    const header = screen.getByText('Rancid Tomatillos!')
    expect(header).toBeInTheDocument()
  })
})
// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
