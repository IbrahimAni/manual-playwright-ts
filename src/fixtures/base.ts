import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { BasePage } from '../pages/BasePage/BasePage';
import { AccountPage } from '../pages/AccountPage/AccountPage';
import { Hairloss } from '../pages/Quiz/hl_quiz/Hairloss';

type MyFixtures = {
    basePage: BasePage
    loginPage : LoginPage
    dashboard: Dashboard
    accountPage: AccountPage
    hairloss: Hairloss
}

export const test = base.extend<MyFixtures>({
    page: async ({page}, use) => {
        const originalGoto = page.goto.bind(page);
        let isAuthenticated: boolean = false;

        page.goto = async (url: string, options?) => {
            if(url.includes("devel") && !isAuthenticated) {
                page.getByLabel('VISITOR PASSWORD').fill("menofmanual")
                page.getByRole("button", {name: "Log in"}).click();
                isAuthenticated = true;
            }
            return originalGoto(url, options);
        };
        await use(page);
    },
    basePage: async ({page}, use) => {
        await use(new BasePage(page));
    },
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    dashboard: async ({page}, use) => {
        await use(new Dashboard(page));
    },    
    accountPage: async ({page}, use) => {
        await use(new AccountPage(page));
    },
    hairloss: async ({page}, use) => {
        await use(new Hairloss(page));
    },
});

export {expect} from '@playwright/test';