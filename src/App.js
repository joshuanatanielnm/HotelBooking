import './assets/scss/style.scss'

import Example from 'pages/Example'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import LandingPage from 'pages/LandingPage'
function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={Example}></Route>
      </Router>
    </div>
  )
}

export default App
