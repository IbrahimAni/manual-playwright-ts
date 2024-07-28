import { Locator, Page } from "@playwright/test";

export class AccountPage{
    readonly page : Page
    readonly accountHeader : Locator
    readonly logoutBtn : Locator

    constructor(page: Page){
        this.page = page;
        this.accountHeader = page.locator('p').filter({ hasText: 'Account' }).first();
        this.logoutBtn = page.locator('a').filter({ hasText: 'Log out' })
    }

    //Global Actions
    async navigateToAccountPage(){
        await this.page.goto('/account');
    }

    async clickLogoutBtn(){
        await this.logoutBtn.click();
    }

    // async 

    //Private Actions

    //Global Assertions
    async assertAccountHeaderVisible(){
        return await this.accountHeader.isVisible();
    }

    //Private Assertions
}