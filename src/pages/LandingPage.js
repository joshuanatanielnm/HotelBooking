import landingPage from 'json/landingPage.json'
import Categories from 'parts/Categories'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Testimoni from 'parts/Testimony'
import React, { Component } from 'react'

export default class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }
  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero data={landingPage.hero} refMostPicked={this.refMostPicked} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Categories data={landingPage.categories} />
        <Testimoni data={landingPage.testimonial} />
        <Footer />
      </>
    )
  }
}
