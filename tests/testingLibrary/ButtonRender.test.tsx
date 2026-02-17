import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test, vi } from 'vitest'
import { Button } from '../react/Button'

test('renders button with text', () => {
  render(<Button onClick={vi.fn()}>Click me</Button>)
  expect(screen.getByRole('button', { name: 'Click me' })).toBeDefined()
})

test('calls onClick when clicked', async () => {
  const user = userEvent.setup()
  const handleClick = vi.fn()

  render(<Button onClick={handleClick}>Click me</Button>)
  await user.click(screen.getByRole('button', { name: 'Click me' }))

  expect(handleClick).toHaveBeenCalledTimes(1)
})
