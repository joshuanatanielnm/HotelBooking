import Button from 'elements/Button'
import Fade from 'react-reveal/Fade'
import React from 'react'

export default function MostPicked(props) {
  return (
    <section className='container' ref={props.refMostPicked}>
      <Fade bottom>
        <h4 className='mb-3'>Most Picked</h4>
        <div className='container-grid'>
          {props.data.map((item, index) => {
            return (
              <div
                key={`mostPicked-${index}`}
                className={`item column-4 ${index === 0 ? 'row-2' : 'row-1'}`}
              >
                <Fade bottom delay={300 * index}>
                  <div className='card card-featured'>
                    <div className='tag'>
                      ${item.price}
                      <span className='font-weight-light'>
                        {' '}
                        per {item.unit}
                      </span>
                    </div>
                    <figure className='img-wrapper'>
                      <img
                        src={
                          item.imageId[0]
                            ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                            : ''
                        }
                        alt={item.name}
                        className='img-cover'
                      />
                    </figure>
                    <div className='meta-wrapper'>
                      <Button
                        type='link'
                        className='text-white stretched-link d-block '
                        href={`/properties/${item._id}`}
                      >
                        <h5>{item.title}</h5>
                      </Button>
                      <span>
                        {item.city}, {item.country}
                      </span>
                    </div>
                  </div>
                </Fade>
              </div>
            )
          })}
        </div>
        <div className='row'></div>
      </Fade>
    </section>
  )
}
