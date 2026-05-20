// @ts-check
const { defineConfig } = require('@playwright/test')

module.exports = defineConfig({
  testDir: './e2e-tests',
  timeout: 30000,
  fullyParallel: true,
  use: {
    baseURL: 'http://localhost:8080',
  },
  webServer: {
    command: 'npm start -- --host 0.0.0.0',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
})