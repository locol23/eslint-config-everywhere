import { type ReactNode } from 'react'
import styles from './Button.module.css'

type ButtonProps = {
  children: ReactNode
  disabled?: boolean
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export function Button({ children, disabled, onClick }: ButtonProps) {
  return (
    <button
      className={styles.button}
      disabled={disabled}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}
