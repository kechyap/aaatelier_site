// import npm files & components
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// import local files & components
import Navigation from '../Navigation'
import Home from '../Home'
import About from '../About'
import Seam from '../Seam'
import Upcycle from '../Upcycle'
import Grill from '../Grill'
import Pops from '../Pops'
import Error from '../Error'
import './index.css'

// make App component
const App = () => (
  <Router>
    <div className='App'>
      <Navigation />
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/seam'>
          <Seam />
        </Route>
        <Route path='/upcycle'>
          <Upcycle />
        </Route>
        <Route path='/grill'>
          <Grill />
        </Route>
        <Route path='/pops'>
          <Pops />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  </Router>
)

// export App component
export default App
