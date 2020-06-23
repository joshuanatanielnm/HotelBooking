import Breadcrumb from 'elements/Breadcrumb'
import Fade from 'react-reveal/Fade'
import React from 'react'

export default function PageDetailTitle({data, breadcrumb}) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={breadcrumb}/>
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">
              {data.name}
            </h1>
            <span>
              {data.city}, {data.country}
            </span>
          </div>

          <div className="col"></div>
        </div>
      </Fade>
    </section>
  )
}
