import Button from 'elements/Button'
import BrandIcon from 'parts/IconText'
import React from 'react'
import Fade from 'react-reveal/Fade'

export default function Header(props) {
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? ' active' : ''
  }

  if (props.isCentered)
    return (
      <header className='spacing-sm'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <Button className='mx-auto brand-text-icon' href='' type='link'>
              Stay<span className='text-gray-900'>cation.</span>
            </Button>
          </nav>
        </div>
      </header>
    )

  return (
    <Fade top>
      <header className='spacing-sm'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light'>
            <BrandIcon />
            <div className='collapse navbar-collapse'>
              <ul className='ml-auto navbar-nav'>
                <li className={`nav-item${getNavLinkClass('/')}`}>
                  <Button className='nav-link' type='link' href='/'>
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/browse-by')}`}>
                  <Button className='nav-link' type='link' href='/browse-by'>
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/stories')}`}>
                  <Button className='nav-link' type='link' href='/stories'>
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass('/agents')}`}>
                  <Button className='nav-link' type='link' href='/agents'>
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  )
}
