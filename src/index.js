// This file takes /src/componenets/App/index.js and puts it on #root div in /public/index.html

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

import App from './components/App'

ReactDOM.render(<App />, document.getElementById('root'))
