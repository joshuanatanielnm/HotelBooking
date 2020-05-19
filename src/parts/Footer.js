import Button from 'elements/Button'
import IconText from 'parts/IconText'
import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <IconText />
            <p href='/' className='brand-tagline'>
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className='col-2 mr-5'>
            <h6 className='mt-2'>For Beginners</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  New Account
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  Start Booking a Room
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>

          <div className='col-2 mr-5'>
            <h6 className='mt-2'>Explore Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  Our Careers
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  Privacy
                </Button>
              </li>
              <li className='list-group-item'>
                <Button type='link' href='/register'>
                  Terms & Conditions
                </Button>
              </li>
            </ul>
          </div>

          <div className='col-4'>
            <h6 className='mt-2'>Explore Us</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button
                  isExternal
                  type='link'
                  href='mailto:support@staycation.id'
                >
                  support@staycation.id
                </Button>
              </li>
              <li className='list-group-item'>
                <Button isExternal type='link' href='tel:+622122081996'>
                  021 - 2208 - 1996
                </Button>
              </li>
              <li className='list-group-item'>
                <span>Staycation, Kemang, Jakarta</span>
              </li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col text-center copyrights'>
            Copyright 2019 • All rights reserved • Staycation
          </div>
        </div>
      </div>
    </footer>
  )
}
