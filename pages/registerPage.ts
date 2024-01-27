import { Page } from "@playwright/test"
export default class RegisterPage{

    constructor(public page: Page){

    }

    async enterfirstName(firstName: string){
        await this.page.fill("#input-firstname",firstName);
    }

    async enterlastName(lastName: string){
        await this.page.fill("#input-lastname",lastName);
    }

    async enterEmail(email: string){
        await this.page.fill("#input-email",email);
    }

    async enterTelephone(phone: string){
        await this.page.fill("#input-telephone",phone);
    }

    async enterPassword(password: string){
        await this.page.fill("#input-password",password);
        await this.page.fill("#input-confirm",password);
    }

    async isSubscribed(){
       return await this.page.locator("#input-newsletter-no").isChecked();
    }

    async selectPrivacyPolicy(){
        await this.page.click("#input-agree");
    }
}