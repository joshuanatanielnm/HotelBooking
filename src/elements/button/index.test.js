import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Button from './index.js'

test('should not allowed click button if isDisabled is present', () => {
  const { container } = render(<Button isDisabled></Button>)

  expect(container.querySelector('span.disabled')).toBeInTheDocument()
})

test('should render loading/spinner', () => {
  const { container, getByText } = render(<Button isLoading></Button>)

  expect(getByText(/loading/i)).toBeInTheDocument()

  expect(container.querySelector('span')).toBeInTheDocument()
})

test('should render <a> tag', () => {
  const { container } = render(<Button type='link' isExternal></Button>)

  expect(container.querySelector('a')).toBeInTheDocument()
})

test('should render <link> Component', () => {
  const { container } = render(
    <Router>
      <Button href='' type='link'></Button>
    </Router>
  )

  expect(container.querySelector('a')).toBeInTheDocument()
})
