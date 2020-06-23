import './assets/scss/style.scss'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import DetailsPage from 'pages/DetailsPage'
import Example from 'pages/Example'
import LandingPage from 'pages/LandingPage'
import React from 'react'

// import LandingPage from 'pages/LandingPage'
function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/example' component={Example}></Route>
        <Route exact path='/' component={LandingPage}></Route>
        <Route path="/properties/:id" component={DetailsPage}></Route>
      </Router>
    </div>
  )
}

export default App
