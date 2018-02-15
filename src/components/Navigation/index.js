import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const Navigation = () => (
  <div className='navbar-wrapper'>
    <div className='navbar'>

      <Link to='/about'> ABOUT </Link>
      <Link to='/'> HOME </Link>
      <Link to='/seam'> SEAM </Link>

    </div>
  </div>

)

export default Navigation
