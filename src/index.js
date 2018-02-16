// import npm files
import React from 'react'
import ReactDOM from 'react-dom'
import 'normalize.css'

// import local files
import App from './components/App'
import './index.css'

// render App component on <div id='root'></div> in /public/index.html
ReactDOM.render(<App />, document.getElementById('root'))

// no export because of render
