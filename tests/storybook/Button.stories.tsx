import { fn } from '@storybook/test'
import { Button } from '../react/Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Example/SimpleButton',
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    onClick: fn(),
    variant: 'secondary',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
    onClick: fn(),
  },
}
