import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css'

import Navigation from '../Navigation/index.js'
import Home from '../Home/index.js'
import About from '../About/index.js'

import Seam from '../Seam/index.js'
import Upcycle from '../Upcycle/index.js'
import Grill from '../Grill/index.js'
import Pops from '../Pops/index.js'

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
