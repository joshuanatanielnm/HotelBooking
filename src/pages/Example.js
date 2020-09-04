import React, { Component } from 'react'

import Breadcrumb from 'elements/Breadcrumb'
import { InputDate } from 'elements/Form'

export default class Example extends Component {

  render() {
    const breadcrumpList = [
      { pageTitle: "home", pageHref: "" },
      {pageTitle:"House Details", pageHref:""}
    ]
    return (
      <div className='container'>
        <div
          className='row align-items-center justify-content-center'
          style={{ height: '100vh' }}
        >
          <div className='col-auto'>
            <Breadcrumb
            data = {breadcrumpList}
            />
          </div>
        </div>
      </div>
    )
  }
}
