import React, { Component } from 'react'
import Stepper, {
  Controller,
  MainContent,
  Meta,
  Numbering,
} from 'elements/Stepper'

import BookingInformation from 'parts/Checkout/BookingInformation'
import Button from 'elements/Button'
import Completed from 'parts/Checkout/Completed'
import Fade from 'react-reveal/Fade'
import Header from 'parts/Header'
import ItemDetails from 'json/itemDetails.json'
import Payment from 'parts/Checkout/Payment'
import checkout from 'store/reducers/checkout'
import { connect } from 'react-redux'

class Checkout extends Component {
  state = {
    data: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      proofPayment: '',
      bankname: '',
      bankHolder: '',
    },
  }

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    })
  }

  componentDidMount() {
    window.scroll(0, 0)
  }

  render() {
    const { data } = this.state
    const { checkout } = this.props

    if (!checkout)
      return (
        <div className='container'>
          <div
            className='row align-items-center justify-content-center text-center'
            style={{ height: '100vh' }}
          >
            <div className='col-3'>
              Pilih kamar dulu
              <div>
                <Button
                  className='btn mt-5'
                  type='button'
                  onClick={() => this.props.history.goBack()}
                  isLight
                >
                  Back
                </Button>
              </div>
            </div>
          </div>
        </div>
      )
    const steps = {
      bookingInformation: {
        title: 'Booking Information',
        description: 'Please fill up the blan fields below',
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: 'Payment',
        description: 'Kindly follow the instructions below',
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: 'Yay! Completed',
        description: null,
        content: <Completed />,
      },
    }
    return (
      <>
        <Header isCentered />

        <Stepper steps={steps}>
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 20 }}
              />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === 'bookingInformation' && (
                <Controller>
                  {data.firstName !== '' &&
                    data.lastName !== '' &&
                    data.email !== '' &&
                    data.phone !== '' && (
                      <Fade>
                        <Button
                          className='mb-3 btn'
                          type='button'
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to Book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className='btn'
                    type='button'
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === 'payment' && (
                <Fade>
                  <Controller>
                    {data.proofPayment !== '' &&
                      data.bankname !== '' &&
                      data.bankHolder !== '' && (
                        <Fade>
                          <Button
                            className='mb-3 btn'
                            type='button'
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}
                          >
                            Continue to Book
                          </Button>
                        </Fade>
                      )}
                    <Button
                      className='btn'
                      type='button'
                      isBlock
                      isLight
                      onClick={prevStep}
                    >
                      Cancel
                    </Button>
                  </Controller>
                </Fade>
              )}
              ,
              {CurrentStep === 'completed' && (
                <Controller>
                  <Button
                    className='btn'
                    type='button'
                    isBlock
                    isPrimary
                    hasShadow
                    href=''
                  >
                    Back to Home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  checkout: state.checkout,
})

export default connect(mapStateToProps)(Checkout)
