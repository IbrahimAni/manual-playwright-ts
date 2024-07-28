import { test } from "../../../../fixtures/base";
import login_dtt from "../../../../data/login_ddt.json"

test.describe('Login DDT Test', () => {
    for (let i = 0; i < login_dtt.length; i++) {
        //Get the login details
        const email = login_dtt[i].email;
        const password = login_dtt[i].password;
        const testName = `Login with "${email.replace('@', '[at]')}" and "${password}"`;

        test(testName, async ({ loginPage }) => {           
            //Navigate to the login page
            await loginPage.navigateToLoginPage();

            //Login                    
            await loginPage.login(email, password);

            //Assertions
            if(email === ' '){
                await loginPage.assertLoginBtnDisabled();
                await loginPage.assertInvalidEmailErrorVisible();
            }else if(password === ' '){
                await loginPage.assertLoginBtnDisabled();
                await loginPage.assertPasswordRequiredErrorVisible();
            }else if(email === " " && password === " "){
                await loginPage.assertLoginBtnDisabled();
                await loginPage.assertInvalidEmailErrorVisible();
                await loginPage.assertPasswordRequiredErrorVisible();
            }else{
                await loginPage.assertInvalidEmailErrorVisible();
            }
        });
    }
});