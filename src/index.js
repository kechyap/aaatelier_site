// import npm files & components
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'normalize.css'

// import local files & components
import Navigation from './components/Navigation'
import Home from './components/Home'
import About from './components/About'
import Seam from './components/Seam'
import Upcycle from './components/Upcycle'
import Grill from './components/Grill'
import Pops from './components/Pops'
import Blog from './components/Blog'
import Error from './components/Error'
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

        <Route path='/blog'>
          <Blog />
        </Route>

        <Route>
          <Error />
        </Route>
      </Switch>
    </div>
  </Router>
)

// render App component on <div id='root'></div> in /public/index.html
ReactDOM.render(<App />, document.getElementById('root'))

// no export because of .render()
