import { Locator, Page, expect } from "@playwright/test";

export class Dashboard{
    readonly page : Page;
    readonly dashboardHeader : Locator

    constructor(page:Page){
        this.page = page;
        this.dashboardHeader = page.getByText('Tasks', { exact: true });
    }

    //Global Actions
    async navigateToDashboard(){
        await this.page.goto('/account/home');
    }

    //Private Actions

    //Global Assertions
    async assertDashboardHeaderVisible(){
        await this.page.waitForTimeout(5000);
        return await this.dashboardHeader.isVisible();
    }

    async assertDashboardUrl(){
        expect(this.page).toHaveURL('/account/home');
    }

    //Private Assertions


}