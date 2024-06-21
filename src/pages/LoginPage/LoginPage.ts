import { Page, Locator, expect } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly emailTxt : Locator
    readonly pwdTxt : Locator
    readonly loginBtn : Locator
    readonly loginHeader : Locator
    readonly invalidEmailError : Locator
    readonly passwordRequired : Locator
    readonly errAlert : Locator
    readonly acceptCookiesBtn : Locator

    constructor(page:Page){
        this.page = page;
        this.emailTxt = page.getByPlaceholder('Email');
        this.pwdTxt = page.getByPlaceholder('Password');
        this.loginBtn = page.getByRole('button', { name: 'Login', exact: true });
        this.loginHeader = page.getByText('Welcome back');
        this.invalidEmailError = page.getByText('Invalid email');
        this.passwordRequired = page.getByText('Required');
        this.errAlert = page.getByText('Oh man!Invalid credentials.');
        this.acceptCookiesBtn = page.getByRole('button', { name: 'I accept' });
    }   

    //Global Actions
    async navigateToLoginPage(){
        await this.page.goto('/login?redirect=%2Faccount/home');
    }

    async login(email:string, password:string){
        await this.emailTxt.fill(email);
        await this.pwdTxt.fill(password);
        await this.loginBtn.click();
    }

    async clickAcceptCookies(){
        await this.acceptCookiesBtn.click();
    }

    //Private Actions

    //Global Assertions
    async assertLoginBtnDisabled(){
        return await this.loginBtn.isDisabled();
    }    

    async assertLoginHeaderVisible(){
        return await this.loginHeader.isVisible();
    }

    async assertInvalidEmailErrorVisible(){
        return await this.invalidEmailError.isVisible();
    }

    async assertPasswordRequiredErrorVisible(){
        return await this.passwordRequired.isVisible();
    }

    async assertErrAlertVisible(){
        return await this.errAlert.isVisible();
    }

    //Private Assertions
    private async assertLoginBtnEnabled(){
        return await this.loginBtn.isEnabled();
    }
}