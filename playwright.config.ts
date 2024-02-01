import { PlaywrightTestConfig, defineConfig, devices } from "@playwright/test";
import { config } from "dotenv";

if (process.env.ENVIRONMENT) {
  config({
    path: `.env.${process.env.ENVIRONMENT}`,
    override: true,
  });
} else {
  config();
}

const pwConfig: PlaywrightTestConfig = {
  testMatch: ["tests/login.test.ts"],
  workers: 4,
  fullyParallel: true,
  use: {
    baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  retries: 2,
  reporter: [
    ["dot"],
    ["json", { outputFile: "jsonReports/jsonReport.json" }],
    ["html", { open: "never" }],
    ["blob"],
    ["json", { outputFile: "report.json" }],
  ],
};
export default pwConfig;
