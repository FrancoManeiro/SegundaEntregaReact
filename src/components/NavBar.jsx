import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <Link to="/hombre" className='noneLink'>
        <h3>Hombre</h3>
      </Link>
      <Link to="/mujer" className='noneLink'>
        <h3>Mujer</h3>
      </Link>
      <Link to="/joyería" className='noneLink'>
        <h3>Joyería</h3>
      </Link>
      <Link to="/electrónica" className='noneLink'>
        <h3>Electrónica</h3>
      </Link>
    </nav>
  )
};

export default NavBar
