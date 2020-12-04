import React from 'react';
import './Header.scss'

const Header = ({ displayHome }) => {
  return (
    <header className='header'>
      <button onClick={() => displayHome()}><h1>Rancid Tomatillos!</h1></button>
    </header>
  )
}

export default Header
