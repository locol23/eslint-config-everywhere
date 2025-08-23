import { promises } from 'node:fs'

export function calculateSum(numbers: number[]): number {
  return numbers.reduce((accumulator, current) => accumulator + current, 0)
}

export function processAsync(): Promise<string> {
  return promises.readFile('package.json', 'utf8')
}

export const configuration = {
  apiUrl: 'https://api.example.com',
  enableFeature: true,
  maxRetries: 3,
  timeout: 5000,
}