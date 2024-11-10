import testOptions from "../../src/config/TestOptions";
import { test } from "../pages/fixtures";


test.describe.parallel("Login", () => {

test("Login with Invalid Mail", async({ loginPage }, testInfo) => {
    await loginPage.action.goToLoginPage();
    await loginPage.action.fillUsernameInput("Invalid Mail");
    await loginPage.action.fillPasswordInput(testOptions.password);
    await loginPage.action.clickLoginButton();
    await loginPage.assertion.isFailedLoginMessageVisible("Email or password is incorrect");});


test("Login with Invalid Password", async({ loginPage }, testInfo) => {
    await loginPage.action.goToLoginPage();
    await loginPage.action.fillUsernameInput(testOptions.enduser.mail);
    await loginPage.action.fillPasswordInput("Invalid Password");
    await loginPage.action.clickLoginButton();
    await loginPage.assertion.isFailedLoginMessageVisible("Email or password is incorrect");});

test("Login with Valid Credentials By End User", async({ loginPage }, testInfo) => {
    await loginPage.action.loginWithCredentials("enduser");
    await loginPage.assertion.isDashboardTextVisible("Dashboard");
});

test("Login with Valid Credentials By Officer", async({ loginPage }, testInfo) => {
    await loginPage.action.loginWithCredentials("officer");
    await loginPage.assertion.isDashboardTextVisible("Dashboard");
});

test("Login with Valid Credentials By Admin", async({ loginPage }, testInfo) => {
    await loginPage.action.loginWithCredentials("admin");
    await loginPage.assertion.isDashboardTextVisibleForAdmin("Dashboard");
});

})
