import { promises } from 'node:fs'

interface PackageInfo {
  name: string
}

interface User {
  active: boolean
}

interface ApiResponse<T> {
  results: T
}

interface MultipleData {
  data1: unknown
  data2: unknown
  data3: unknown
}

export async function goodPromisePatterns(): Promise<string> {
  try {
    const data = await promises.readFile('package.json', 'utf8')
    const packageInfo: PackageInfo = JSON.parse(data) as PackageInfo
    return packageInfo.name
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Failed to read package.json:', error)
    return 'unknown'
  }
}

export async function promiseChainWithReturn(): Promise<unknown> {
  try {
    const response = await fetch('/api/data')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data: ApiResponse<unknown> = await response.json() as ApiResponse<unknown>
    return data.results
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('API request failed:', error)
    throw error
  }
}

export async function asyncAwaitExample(): Promise<User[]> {
  try {
    const response = await fetch('/api/users')
    if (!response.ok) {
      throw new Error('Failed to fetch users')
    }
    const users: User[] = await response.json() as User[]
    return users.filter((user) => user.active)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching users:', error)
    throw error
  }
}

export function promiseWithProperErrorHandling(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.5
      if (success) {
        resolve('Operation completed successfully')
      } else {
        reject(new Error('Operation failed'))
      }
    }, 1000)
  })
}

export async function multiplePromiseHandling(): Promise<MultipleData> {
  try {
    const [response1, response2, response3] = await Promise.all([
      fetch('/api/data1'),
      fetch('/api/data2'),
      fetch('/api/data3'),
    ])

    const [data1, data2, data3] = await Promise.all([
      response1.json(),
      response2.json(),
      response3.json(),
    ])

    return {
      data1,
      data2,
      data3,
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('One or more requests failed:', error)
    throw error
  }
}

export const promiseConfiguration = {
  apiEndpoint: 'https://api.example.com',
  retryAttempts: 3,
  timeout: 5000,
}