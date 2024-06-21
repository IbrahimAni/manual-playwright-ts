import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { Homepage } from '../pages/Homepage/Homepage';
import { BasePage } from '../pages/BasePage/BasePage';

type MyFixtures = {
    loginPage : LoginPage
    homepage: Homepage
    basePage: BasePage
}

export const test = base.extend<MyFixtures>({
    basePage: async ({page}, use) => {
        await use(new BasePage(page));
    },
    loginPage: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    homepage: async ({page}, use) => {
        await use(new Homepage(page));
    },    
});

export {expect} from '@playwright/test';