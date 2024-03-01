import { test, expect } from "@playwright/test";

test("POST Request", async ({ request }) => {
  const postResponse = await request.post("https://reqres.in/api/users", {
    data: {
      name: "Ishaan",
      job: "leader",
    },
  });
  const responseBody = await postResponse.json();
  console.log(responseBody);
  expect(postResponse.ok()).toBeTruthy();
  expect(postResponse.status()).toBe(201);
});
