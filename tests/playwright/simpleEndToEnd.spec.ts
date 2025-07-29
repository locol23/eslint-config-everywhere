import { expect, test } from '@playwright/test'

test('basic navigation test', async ({ page }) => {
  await page.goto('https://example.com')
  await expect(page).toHaveTitle(/Example/)
  
  const heading = page.locator('h1')
  await expect(heading).toBeVisible()
})

test('form interaction test', async ({ page }) => {
  await page.goto('https://example.com/form')
  
  await page.fill('#name', 'Test User')
  await page.fill('#email', 'test@example.com')
  await page.click('#submit')
  
  await expect(page.locator('.success')).toBeVisible()
})