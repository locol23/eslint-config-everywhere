import { describe, expect, it } from 'vitest'

function double(number: number): number {
  return number * 2
}

function isEven(number: number): boolean {
  return number % 2 === 0
}

describe('Utils', () => {
  it('should double numbers', () => {
    expect(double(5)).toBe(10)
    expect(double(-3)).toBe(-6)
  })

  it('should check if number is even', () => {
    expect(isEven(4)).toBe(true)
    expect(isEven(3)).toBe(false)
    expect(isEven(0)).toBe(true)
  })
})
