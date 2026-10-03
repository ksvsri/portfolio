import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests',
  timeout: 90000,
  workers: 2,
  fullyParallel: true,
  use: { baseURL: 'http://127.0.0.1:5174', channel: 'msedge', headless: true },
  webServer: {
    command: 'npm run dev -- --port 5174 --strictPort',
    url: 'http://127.0.0.1:5174',
    reuseExistingServer: true,
  },
  projects: [
    { name: 'desktop', use: { viewport: { width: 1440, height: 1000 } } },
    {
      name: 'mobile',
      use: { viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true },
    },
  ],
});
