import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import simple_logo from './simple_logo.svg'

export const Navigation = () => (
  <div className='navbar-wrapper'>
    <div className='navbar'>
      <img className='simple_logo' src={simple_logo} />
      <Link to='/'>Projects</Link>
      <Link to='/about'>About</Link>
      <Link to='/seam'>Seam</Link>
      <Link to='/upcycle'>Upcycle</Link>
      <Link to='/grill'>Grill</Link>
      <Link to='/pops'>Pops</Link>
    </div>
  </div>
)

export default Navigation
