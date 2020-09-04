import './index.scss'

import Fade from 'react-reveal/Fade'
import React from 'react'
import propTypes from 'prop-types'

export default function Numbering(props) {
  const { style, className, data, current } = props

  const KeysOfData = Object.keys(data)

  return (
    <Fade>
      <ol className={['stepper', className].join(' ')} style={style}>
        {KeysOfData.map((list, index) => {
          let isActive = list === current ? 'active' : ''

          if (index + 1 === KeysOfData.length) {
            isActive = ''
            return null
          }

          return (
            <li key={`list-${index}`} className={[isActive].join(' ')}>
              {index + 1}
            </li>
          )
        })}
      </ol>
    </Fade>
  )
}

Numbering.propTypes = {
  className: propTypes.string,
  data: propTypes.object,
  current: propTypes.string,
}
