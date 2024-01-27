import { test as baseTest } from "@playwright/test"
import RegisterPage from "../pages/registerPage"

type pages={
    registerPage: RegisterPage,
}

const testPages=baseTest.extend<pages>({
    registerPage: async({page}, use)=>{
        await use(new RegisterPage(page));
    }
})

export const test=testPages;
export const expect=testPages.expect