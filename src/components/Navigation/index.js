import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Navigation = () => (
  <div>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/seam'>Seam</Link>
    <Link to='/upcycle'>Upcycle</Link>
    <Link to='/grill'>Grill</Link>
    <Link to='/pops'>Pops</Link>
  </div>
)

export default Navigation
