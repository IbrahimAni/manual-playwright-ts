import {test} from "../../../../fixtures/base";

test("Logout Test", async ({accountPage, loginPage}) => {
    await accountPage.navigateToAccountPage();
    await accountPage.assertAccountHeaderVisible();
    await accountPage.clickLogoutBtn();

    await loginPage.assertLoginHeaderVisible();
});