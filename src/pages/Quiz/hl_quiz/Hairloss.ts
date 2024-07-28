import { Locator, Page, expect } from "@playwright/test";

export class Hairloss{
    readonly page : Page
    readonly question: Locator
    readonly optionBtn: Locator

    constructor(page: Page){
        this.page = page;
        this.question = this.page.getByTestId("questionDiv");
        this.optionBtn = this.page.getByTestId("optionDiv");
    }

    //Glbal Actions
    async selectYesyOrNo(answer: string){
        if(answer === "true"){
            await this.optionBtn.first().click();
        }else{
            await this.optionBtn.last().click();
        }
    }

    //Private Actions

    //Global Assertions
    async assertQueastionIsVisible(){
        await expect(this.question).toBeVisible();
    }

    async assertQuestionText(text: string){
        await expect(this.question).toHaveText(text);
    }

    //Private Assertions
}