import { execSync } from 'node:child_process'
import { promises as fs } from 'node:fs'
import { createServer } from 'node:http'
import path from 'node:path'
import type { IncomingMessage, Server, ServerResponse } from 'node:http'

interface PackageJson {
  name: string
  version: string
}

interface EnvironmentInfo {
  arch: string
  cwd: string
  env: {
    NODE_ENV: string | undefined
    PATH: string[] | undefined
  }
  nodeVersion: string
  platform: string
}

export async function readPackageJson(): Promise<PackageJson> {
  const packagePath = path.join(process.cwd(), 'package.json')
  const content = await fs.readFile(packagePath, 'utf8')
  return JSON.parse(content) as PackageJson
}

export function checkNodeVersion(): number {
  const version = process.version
  const majorVersion = Number.parseInt(version.slice(1).split('.')[0], 10)

  if (majorVersion < 18) {
    throw new Error('Node.js version 18 or higher is required')
  }

  return majorVersion
}

export function createSimpleServer(port = 3000): Server {
  const server = createServer((request: IncomingMessage, response: ServerResponse) => {
    response.writeHead(200, { 'Content-Type': 'application/json' })
    response.end(
      JSON.stringify({
        method: request.method,
        timestamp: new Date().toISOString(),
        url: request.url,
      })
    )
  })

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on port ${port}`)
  })

  return server
}

export function executeCommand(command: string): string {
  try {
    const output = execSync(command, { encoding: 'utf8' })
    return output.trim()
  } catch (error) {
    throw new Error(`Command failed: ${(error as Error).message}`, { cause: error })
  }
}

export function getEnvironmentInfo(): EnvironmentInfo {
  return {
    arch: process.arch,
    cwd: process.cwd(),
    env: {
      NODE_ENV: process.env.NODE_ENV,
      PATH: process.env.PATH?.split(':').slice(0, 3),
    },
    nodeVersion: process.version,
    platform: process.platform,
  }
}