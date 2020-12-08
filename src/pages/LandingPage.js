import React, { Component } from 'react'

import Categories from 'parts/Categories'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import Hero from 'parts/Hero'
import MostPicked from 'parts/MostPicked'
import Testimoni from 'parts/Testimony'
import { connect } from 'react-redux'
import { fetchPage } from 'store/actions/page'

class LandingPage extends Component {
  constructor(props) {
    super(props)
    this.refMostPicked = React.createRef()
  }

  componentDidMount() {
    window.title = 'LandingPage'
    window.scrollTo(0, 0)
    if (this.props.page.landingPage) {
      this.props.fetchPage(
        'https://admin-hotelbooking.herokuapp.com/api/v1/member/landing-page',
        'landingPage'
      )
    }
  }
  render() {
    const { page } = this.props

    if (!page.hasOwnProperty('landingPage')) return null
    return (
      <>
        <Header {...this.props} />
        <Hero data={page.landingPage.hero} refMostPicked={this.refMostPicked} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={page.landingPage.mostPicked}
        />
        <Categories data={page.landingPage.categories} />
        <Testimoni data={page.landingPage.testimonial} />
        <Footer />
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  page: state.page ? state.page.landingPage : null,
})

export default connect(mapStateToProps, { fetchPage })(LandingPage)
