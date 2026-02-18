const defaultTimeout = 5000

export function getConfig(): { timeout: number } {
  return { timeout: defaultTimeout }
}
