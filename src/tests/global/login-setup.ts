import { MANUAL_UK } from "../../../playwright.config";
import {test as setup} from "../../fixtures/base";

setup("Login Authentication", async ({page, loginPage, dashboard}) => {
    //Get the environment variables
    const email = process.env.EMAIL!;
    const password = process.env.PASSWORD!;

    //Navigate to the login page
    await loginPage.navigateToLoginPage();

    //Login
    await loginPage.assertLoginHeaderVisible();
    await loginPage.clickAcceptCookies();  
    await loginPage.assertLoginBtnDisabled();
    await loginPage.login(email, password);

    await dashboard.assertDashboardHeaderVisible();
    await dashboard.assertDashboardUrl();

    await page.context().storageState({ path: MANUAL_UK });
});