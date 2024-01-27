import { test,expect } from "../fixtures/pomFixture"
import RegisterPage from "../pages/registerPage";

test.describe("Register Test",async()=>{

    test("Register with valid user",async({ page, baseURL, registerPage })=>{
        await page.goto(`${baseURL}route=account/register`);
        await registerPage.enterEmail("ishaan@gmail.com");
        await registerPage.enterfirstName("Ishaan");
        await registerPage.enterPassword("Test@123");
        await registerPage.enterlastName("ram");
        await registerPage.enterTelephone("15210529104");
    })
});