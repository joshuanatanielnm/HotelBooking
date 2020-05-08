import landingPage from 'json/landingPage.json'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import React, { Component } from 'react'

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero data={landingPage.hero} />
        <MostPicked data={landingPage.mostPicked} />
      </>
    )
  }
}
