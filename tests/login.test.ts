import { chromium, test } from "@playwright/test";
import { env } from "./utils/env";

test("Login test demo", async () => {
  const browser = await chromium.launch({
    headless: false,
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(process.env.URL as string);
  await page.hover(
    "//a[@data-toggle='dropdown']//span[contains(.,'My account')]"
  );
  await page.click("text=Login");
  await page.fill("input[name='email']", env.EMAIL);
  await page.fill("input[name='password']", env.PASSWORD);
  await page.click("input[value='Login']");
  const newContext = await browser.newContext();
  const newPage = await newContext.newPage();
  await newPage.goto("https://ecommerce-playground.lambdatest.io/");
  await newPage.waitForTimeout(5000);
});
