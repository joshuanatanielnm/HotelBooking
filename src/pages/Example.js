import React, { Component } from 'react'

<<<<<<< HEAD
import Breadcrumb from 'elements/Breadcrumb'
import { InputDate } from 'elements/Form'

export default class Example extends Component {

  render() {
    const breadcrumpList = [
      { pageTitle: "home", pageHref: "" },
      {pageTitle:"House Details", pageHref:""}
    ]
=======
import InputDate from 'elements/Form/InputDate'
import InputNumber from 'elements/Form/InputNumber'

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
>>>>>>> 08d4ac2f397f132316ba746adff31d7fc376a2f7
    return (
      <div className='container'>
        <div
          className='row align-items-center justify-content-center'
          style={{ height: '100vh' }}
        >
          <div className='col-auto'>
<<<<<<< HEAD
            <Breadcrumb
            data = {breadcrumpList}
=======
            <InputDate
              max={30}
              onChange={this.handleChange}
              name='value'
              value={this.state.value}
>>>>>>> 08d4ac2f397f132316ba746adff31d7fc376a2f7
            />
          </div>
        </div>
      </div>
    )
  }
}
