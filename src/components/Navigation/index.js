// import npm components & files
import React from 'react'
import { Link } from 'react-router-dom'

// import local components & files
import './index.css'

// make Navigation component
export const Navigation = () => (
  <div className='navbar text-align-right'>

    <Link to='/about'> ABOUT </Link>
    <Link to='/'> PROJECT </Link>
    <Link to='/Art'> ART </Link>
    <Link to='/Blog'> BLOG </Link>

  </div>
)

// export Navigation component
export default Navigation
