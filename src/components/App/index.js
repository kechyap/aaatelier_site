import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'

import Navigation from '../Navigation'
import Home from '../Home'
import About from '../About'

import Seam from '../Seam'
import Upcycle from '../Upcycle'
import Grill from '../Grill'
import Pops from '../Pops'

const App = () => (
  <Router>
    <div>

      <Route exact path='/' component={Home} />
      <Navigation />
      <Route path='/about' component={About} />
      <Route path='/seam' component={Home} />
      <Route path='/upcycle' component={Home} />
      <Route path='/grill' component={Home} />
      <Route path='/pops' component={Home} />
    </div>
  </Router>
)

export default App
