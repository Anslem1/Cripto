import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar () {
  return (
    <nav className='nav-container'>
      <p className='nav-text'>
        <i className='fa-brands fa-bitcoin'></i>
        <span className='cri'>Cri</span>
        <span className='pto'>pto</span>
      </p>
      <div className='links'>
        <Link to='/' className='link'>
          Markets
        </Link>
        <Link to='/trending' className='link'>
          Trending
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
