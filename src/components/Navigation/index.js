import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

import logo from '../../images/logo.svg'

const Navigation = () => (
  <div>
    <img src={logo} style={{width: '5rem'}} />
    <h2>AAAtelier</h2>
    <p>Art and Architecture Atelier</p>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/seam'>Seam</Link>
    <Link to='/upcycle'>Upcycle</Link>
    <Link to='/grill'>Grill</Link>
    <Link to='/pops'>Pops</Link>
  </div>
)

export default Navigation
