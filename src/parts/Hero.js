import IconCities from 'assets/images/icons/ic_cities.svg'
import IconTraveler from 'assets/images/icons/ic_traveler.svg'
import IconTreasure from 'assets/images/icons/ic_treasure.svg'
import ImageHero_ from 'assets/images/icons/img-hero-frame.jpg'
import ImageHero from 'assets/images/icons/img-hero.jpg'
import Button from 'elements/Button'
import React from 'react'
import Fade from 'react-reveal/Fade'
import numberFormat from 'utilities/formatNumber'

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth',
    })
  }

  return (
    <Fade bottom>
      <section className='container pt-4'>
        <div className='row align-items-center'>
          <div className='col-auto pr-5' style={{ width: 500 }}>
            <h1
              className='mb-3 font-weight-bold line-height-1'
              style={{ lineHeight: 1.3 }}
            >
              Forget Busy Work,
              <br />
              Start Next Vacation
            </h1>
            <p className='mb-5 text-gray-500 font-weight-light w-75'>
              We provide what you need to enjoy your holiday with family. Time
              to make another memorable moments.
            </p>
            <Button
              className='px-5 btn'
              hasShadow
              isPrimary
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className='mt-5 row'>
              <div className='col-auto' style={{ marginRight: 20 }}>
                <img
                  width='36'
                  height='36'
                  src={IconTraveler}
                  alt={`${props.data.travelers} Travelers`}
                />
                <h6 className='mt-3'>
                  {numberFormat(props.data.travelers)}{' '}
                  <span className='text-gray-500 font-weight-light'>
                    travelers
                  </span>
                </h6>
              </div>
              <div className='col-auto' style={{ marginRight: 20 }}>
                <img
                  width='36'
                  height='36'
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasures`}
                />
                <h6 className='mt-3'>
                  {numberFormat(props.data.treasures)}{' '}
                  <span className='text-gray-500 font-weight-light'>
                    treasures
                  </span>
                </h6>
              </div>
              <div className='col-auto'>
                <img
                  width='36'
                  height='36'
                  src={IconCities}
                  alt={`${props.data.cities} Cities`}
                />
                <h6 className='mt-3'>
                  {numberFormat(props.data.cities)}{' '}
                  <span className='text-gray-500 font-weight-light'>
                    cities
                  </span>
                </h6>
              </div>
            </div>
          </div>

          <div className='pl-5 col-6'>
            <div style={{ width: 520, height: 410 }}>
              <img
                src={ImageHero}
                alt=''
                className='img-fluid position-absolute'
                style={{ margin: '-30px 0 0 -30px', zIndex: 1 }}
              />
              <img
                src={ImageHero_}
                alt=''
                className='img-fluid position-absolute'
                style={{ margin: '0 -15px -15px 0' }}
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  )
}
