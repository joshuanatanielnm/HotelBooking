import propTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Button(props) {
  const className = [props.className]
  if (props.isPrimary) className.push('btn-primary')
  if (props.isLarge) className.push('btn-lg')
  if (props.isSmall) className.push('btn-sm')
  if (props.isBlock) className.push('btn-block')
  if (props.hasShadow) className.push('btn-shadow')

  const onClick = () => {
    if (props.onClick) props.onClick()
  }

  if (props.isLoading || props.isDisabled) {
    if (props.isDisabled) className.push('disabled')
    return (
      <span className={className.join(' ')} style={props.style}>
        {props.isLoading ? (
          <>
            <span className='spinner-border spinner-border-sm mx-5'></span>
            <span className='sr-only'>Loading...</span>
          </>
        ) : (
          props.childern
        )}
      </span>
    )
  }

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        <a
          href={props.href}
          className={className.join(' ')}
          style={props.style}
          target={props.target === '_blank' ? '_blank' : undefined}
          rel={props.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {props.childern}
        </a>
      )
    } else {
      return (
        <Link
          to={props.href}
          className={className.join(' ')}
          style={props.style}
          onClick={onClick}
        >
          {props.childern}
        </Link>
      )
    }
  }
  return (
    <button
      className={className.join(' ')}
      style={props.style}
      onClick={onClick}
    >
      {props.childern}
    </button>
  )
}
Button.prototype = {
  type: propTypes.oneOf(['button', 'Link']),
  onClick: propTypes.func,
  target: propTypes.string,
  href: propTypes.string,
  className: propTypes.string,
  isExternal: propTypes.bool,
  isDisabled: propTypes.bool,
  isLoading: propTypes.bool,
  isSmall: propTypes.bool,
  isLarge: propTypes.bool,
  isBlock: propTypes.bool,
  hasShadow: propTypes.bool,
}
