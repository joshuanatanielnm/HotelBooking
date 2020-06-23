import React, { Component } from 'react'

import Fade from 'react-reveal/Fade'
import FeaturedImage from 'parts/FeaturedImage'
import Header from 'parts/Header'
import ItemDetails from 'json/itemDetails.json'
import PageDetailTitle from 'parts/PageDetailTitle'

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
      </>
    )
  }
}
