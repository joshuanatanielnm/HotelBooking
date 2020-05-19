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
            <a href='' className='brand-tagline'>
              We kaboom your beauty holiday instantly and memorable.
            </a>
          </div>
          <div className='col-2 mr-5'>
            <h6 className='mt-2'>For Beginners</h6>
            <ul className='list-group list-group-flush'>
              <li className='list-group-item'>
                <Button type='link' href='/register'></Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
