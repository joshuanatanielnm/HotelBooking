import './index.scss'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

import React, { useEffect, useRef, useState } from 'react'

import { DateRange } from 'react-date-range'
import formatDate from 'utilities/formatDate'
import iconCalendar from 'assets/images/icons/ic_calendar.svg'
import propTypes from 'prop-types'

export default function Date(props) {
  console.log(props)
  const { value, placeholder, name } = props
  const [isShowed, setIsShowed] = useState(false)

  const datePickerChange = (value) => {
    const target = {
      target: {
        value: value.selection,
        name: name,
      },
    }
    props.onChange(target)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const refDate = useRef(null)
  const handleClickOutside = (event) => {
    if (refDate && !refDate.current.contains(event.target)) {
      setIsShowed(false)
    }
  }

  const check = (focus) => {
    focus.indexOf(1) < 0 && setIsShowed(false)
  }

  const displayDate = `${value.startDate ? formatDate(value.startDate) : ''}${
    value.endDate ? '-' + formatDate(value.endDate) : ''
  }`

  return (
    <div
      ref={refDate}
      className={['input-date mb-3', props.outerClassName].join(' ')}
    >
      <div className='input-group'>
        <div className='bg-gray-900 input-group-prepend'>
          <span className='input-group-text'>
            <img src={iconCalendar} alt='' />
          </span>
        </div>
        <input
        readOnly
        className='form-control'
        type='text'
        value={displayDate}
        placeholder={placeholder}
        onClick={() => setIsShowed(!isShowed)}
      />

      {isShowed && (
        <div className='date-range-wrapper'>
          <DateRange
            editableDateInputs={true}
            onChange={datePickerChange}
            moveRangeOnFirstSelection={false}
            onRangeFocusChange={check}
            ranges={[value]}
          ></DateRange>
        </div>
      )}
      </div>
    </div>
  )
}

Date.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
}
