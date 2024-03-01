import { test, expect, Page } from "@playwright/test";

test.describe("Sample Suite", async () => {
  let page: Page;

  test.beforeAll(async ({ browser }) => {
    let context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
  });

  test("Sample Test#1", async () => {
    await page.click("text=Home");
    expect(await page.url()).toContain("home");
  });

  test("Sample Test#2", async () => {
    await page.click("text=Search");
    expect(await page.url()).toContain("search");
  });
});
