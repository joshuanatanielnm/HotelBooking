import React, { Component } from 'react'

import BookingForm from 'parts/BookingForm'
import Categories from 'parts/Categories'
import Fade from 'react-reveal/Fade'
import FeaturedImage from 'parts/FeaturedImage'
import Footer from 'parts/Footer'
import Header from 'parts/Header'
import ItemDetails from 'json/itemDetails.json'
import PageDetailDesc from 'parts/PageDetailDesc'
import PageDetailTitle from 'parts/PageDetailTitle'
import Testimoni from 'parts/Testimony'

export default class DetailsPage extends Component {

  componentDidMount(){
    window.title = "Staycation | Home"
    window.scrollTo(0,0)
  }
  render() {
    const breadcrumb = [
      { pageTitle: "home", pageHref: "" },
      {pageTitle:"House Details", pageHref:""}
    ]
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcrumb={breadcrumb}
          data = {ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data = {ItemDetails.imageUrls}></FeaturedImage>
        <Fade bottom delay={300}>
          <section className="container">
            <div className="row">
              <div className="col-7 pr-5">
                <PageDetailDesc data={ItemDetails}/>
              </div>
              <div className="col-5">
                <BookingForm itemDetails={ItemDetails}></BookingForm>
              </div>
            </div>
          </section>
        </Fade>

        <Categories data={ItemDetails.categories}/>
        <Testimoni data={ItemDetails.testimonial}/>
        <Footer/>

      </>
    )
  }
}
