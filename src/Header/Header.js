import React from 'react'
import './Header.scss'

const Header = ({ selectedMovie, displayHome }) => {
  const determineBackground = () => {
    return selectedMovie ? selectedMovie.backdrop_path : 'https://i.imgur.com/l2Km3g7.jpg'
  }

  return (
    <header className='header' style={{ background: `url(${determineBackground()})`}}>
      <button onClick={() => displayHome()}><h1>RANCID TOMATILLOS</h1></button>
    </header>
  )
}

export default Header
