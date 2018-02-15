import React from 'react'
import { Router, Route, Redirect, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import './index.css'

import googleAnalytics from './googleAnalytics'
import ScrollToTop from './ScrollToTop'

import Navigation from '../Navigation'

import Home from '../Home'
import About from '../About'

import Seam from '../Seam'
import Upcycle from '../Upcycle'
import Grill from '../Grill'
import Pops from '../Pops'

// Error component
//   Used in the Routes component
const Error = () => (
  <div>
    <h1>Error, page not found</h1>
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
      <Route exact path='/'>
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
