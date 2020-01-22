// import npm components & files
import React from 'react'
import { Link } from 'react-router-dom'

// import local components & files
import './index.css'

// make Navigation component
export const Navigation = () => (
  <div className='navbar text-align-right'>
    <Link to='/about'> ABOUT </Link>
    <Link to='/'> INTERIOR </Link>
    <Link to='/exhibition'> EXHIBITION </Link>
    <Link to='/identity'> IDENTITY </Link>
    <Link to='/Art'> ART </Link>
  </div>
)

// export Navigation component
export default Navigation
