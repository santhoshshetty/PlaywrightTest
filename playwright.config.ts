import { PlaywrightTestConfig, defineConfig, devices } from "@playwright/test";

const config: PlaywrightTestConfig={
    testMatch: ["tests/sample.test.ts"],
    workers:4,
    fullyParallel: true,
    use: {
        baseURL: "https://ecommerce-playground.lambdatest.io/index.php?",
        headless: false,
        screenshot: "only-on-failure",
        video: "retain-on-failure"
    },
    retries: 2,
    reporter: [["dot"],["json",{outputFile: "jsonReports/jsonReport.json"}],["html",{open: "never"}]]
};
export default config;