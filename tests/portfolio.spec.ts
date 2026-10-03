import { test, expect } from '@playwright/test';
test('portfolio journeys and local contact preview', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  await page.waitForFunction(
    () => document.querySelector('.hero-copy>div')?.getAnimations().length === 0,
  );
  await expect(page.getByRole('heading', { level: 1 })).toContainText('KOBBARISETTI');
  await expect(
    page.locator('#architecture, #notes, .approach, .code-section, .ember-disc, .orbit-ring'),
  ).toHaveCount(0);
  await expect(page.locator('.brand-symbol').first()).toHaveText('s');
  await expect(page.locator('.brand-symbol').last()).toHaveText('s');
  await expect(page.locator('body')).toBeVisible();
  await expect(page.locator('body')).toHaveCSS('background-color', 'rgb(255, 250, 246)');
  await expect(page.getByRole('img', { name: 'Endava logo' })).toHaveAttribute(
    'src',
    '/endava-logo.svg',
  );
  const logo = await page.request.get('/endava-logo.svg');
  expect(logo.status()).toBe(200);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
  ).toBeTruthy();
  await page.screenshot({ path: `test-results/${testInfo.project.name}-hero.png` });
  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Open navigation' }).click();
    await page.getByRole('navigation').getByRole('link', { name: 'Projects', exact: true }).click();
    await expect(page.getByRole('button', { name: 'Open navigation' })).toBeVisible();
  }
  await page.getByRole('button', { name: 'Inspect EasyPay' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await expect(page.getByRole('dialog')).toContainText('UPI integration');
  await expect(page.getByRole('dialog')).toHaveCSS('background-color', 'rgb(255, 255, 255)');
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).not.toBeVisible();
  await page.getByLabel('Name', { exact: true }).fill('Test Visitor');
  await page.getByLabel('Email', { exact: true }).fill('visitor@example.com');
  await page.getByLabel('Message', { exact: true }).fill('I would like to discuss a Java role.');
  await page.getByRole('button', { name: 'Preview request' }).click();
  await expect(
    page.getByRole('status').filter({ hasText: 'Request prepared locally' }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Open in your email app' })).toHaveAttribute(
    'href',
    /mailto:saikobbarisetti7187@gmail.com/,
  );
  const resume = await page.request.get('/sai-kobbarisetti-resume.jpg');
  expect(resume.status()).toBe(200);
  expect(resume.headers()['content-type']).toContain('image/jpeg');
  expect(errors).toEqual([]);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
  ).toBeTruthy();
});
test('reduced motion and responsive layouts', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.evaluate(() => document.fonts.ready);
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
      `No overflow at ${width}px`,
    ).toBeTruthy();
  }
  await expect(page.locator('.monitor-bars i').first()).toHaveCSS('animation-name', 'none');
  for (const section of await page.locator('section').all()) await section.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: 'test-results/embers-full-page.png', fullPage: true });
});
