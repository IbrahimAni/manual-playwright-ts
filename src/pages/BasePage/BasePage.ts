import { Locator, Page } from "@playwright/test";

export class BasePage{
    readonly page : Page
    readonly acceptCookiesBtn : Locator

    constructor(page:Page){
        this.page = page;
        this.acceptCookiesBtn = page.locator('button').filter({ hasText: 'I accept' });
    }

    //Global Actions
    async clickAcceptCookies(){
        await this.acceptCookiesBtn.click();
    }

    //Private Actions

    //Global Assertions

    //Private Assertions
}