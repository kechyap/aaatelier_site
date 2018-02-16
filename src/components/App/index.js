import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import './index.css'
import googleAnalytics from './googleAnalytics'
import ScrollToTop from './ScrollToTop'

import Navigation from '../Navigation/index.js'
import Home from '../Home/index.js'
import About from '../About/index.js'

import Seam from '../Seam/index.js'
import Upcycle from '../Upcycle/index.js'
import Grill from '../Grill/index.js'
import Pops from '../Pops/index.js'

// Error component
//   Used in the Routes component
const Error = () => (
  <div>
    <h1>OPPS ! </h1>
    <h2> This page is not working. <br />
    Check the address again ! </h2>
  </div>
)

// Routes component
//   max-width around whole site
//   Navigation is always shown
//   Switch changes component based on route in url bar
//   If nothing matches, show the Error component
const Routes = () => (
  <div>
    <Navigation />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/seam' component={Home} />
      <Route path='/upcycle' component={Home} />
      <Route path='/grill' component={Home} />
      <Route path='/pops' component={Home} />
      <Route component={Error} />
    </Switch>
  </div>
)

// Makes a fake 'browser history'
//   so Google Analytics can follow the user
const history = createHistory()

// Actual App component
//   Also ScrollToTop when user changes pages
//   Then inside is the Routes component inside of googleAnalytics function
const App = () => (
  <Router history={history}>
    <ScrollToTop>
      <Route component={googleAnalytics(Routes)} />
    </ScrollToTop>
  </Router>
)

export default App
