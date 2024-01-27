import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('ishaan@gmail.com');
  await page.getByPlaceholder('E-Mail Address').press('Tab');
  await page.getByPlaceholder('Password').fill('Test@123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit Account' }).click();
  await page.getByPlaceholder('Telephone').click();
  await page.getByPlaceholder('Telephone').fill('+49 15210529104');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]")
  await page.getByRole('link', { name: 'Logout', exact: true }).click();
});