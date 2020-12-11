import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = ({ selectedMovie, displayHome }) => {
  const determineBackground = () => {
    return selectedMovie ? selectedMovie.backdrop_path : 'https://i.imgur.com/l2Km3g7.jpg'
  }

  return (
    <header className='header' style={{ background: `url(${determineBackground()})`}}>
      <Link to='/'><button onClick={ () => displayHome() }><h1>RANCID TOMATILLOS</h1></button></Link>
    </header>
  )
}

export default Header
