import { test as myTest } from "@playwright/test"

const myFixture=myTest.extend<{
    age: number,
    name: string
}>({
    age: 2,
    name: "Ishaan"
});

export const test=myFixture;