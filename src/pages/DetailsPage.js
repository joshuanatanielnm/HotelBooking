import React, { Component } from 'react'

import BookingForm from 'parts/BookingForm'
import Categories from 'parts/Categories'
import Fade from 'react-reveal/Fade'
import FeaturedImage from 'parts/FeaturedImage'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import PageDetailDesc from 'parts/PageDetailDesc'
import PageDetailTitle from 'parts/PageDetailTitle'
import Testimoni from 'parts/Testimony'
import { checkoutBooking } from 'store/actions/checkout'
import { connect } from 'react-redux'
import { fetchPage } from 'store/actions/page'

class DetailsPage extends Component {
  componentDidMount() {
    window.title = 'Staycation | Home'
    window.scrollTo(0, 0)

    if (!this.props.page[this.props.params.id])
      this.props.fetchPage(
        `${process.env.REACT_APP_HOST}/api/v1/member/detail-page/${this.props.params.id}`
      )
  }
  render() {
    const { page } = this.props
    const breadcrumb = [
      { pageTitle: 'home', pageHref: '' },
      { pageTitle: 'House Details', pageHref: '' },
    ]
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle breadcrumb={breadcrumb} data={page}></PageDetailTitle>
        <FeaturedImage data={page.imageUrls}></FeaturedImage>
        <Fade bottom delay={300}>
          <section className='container'>
            <div className='row'>
              <div className='pr-5 col-7'>
                <PageDetailDesc data={page} />
              </div>
              <div className='col-5'>
                <BookingForm
                  page={page}
                  startBooking={this.props.checkoutBooking}
                ></BookingForm>
              </div>
            </div>
          </section>
        </Fade>

        <Categories data={page.categories} />
        <Testimoni data={page.testimonial} />
        <Footer />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  page: state.page.detailsPage
}

export default connect(mapStateToProps, { checkoutBooking })(DetailsPage)
