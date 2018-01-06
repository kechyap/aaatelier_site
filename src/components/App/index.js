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
      <Navigation />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/seam' component={Seam} />
      <Route path='/upcycle' component={Upcycle} />
      <Route path='/grill' component={Grill} />
      <Route path='/pops' component={Pops} />
    </div>
  </Router>
)

export default App
