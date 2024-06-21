import { Locator, Page } from "@playwright/test";

export class Homepage{
    readonly page : Page;
    readonly homeHeader : Locator

    constructor(page:Page){}

    //Global Actions
    async navigateToHomepage(){
        await this.page.goto('/account/home');
    }

    //Private Actions

    //Global Assertions

    //Private Assertions


}