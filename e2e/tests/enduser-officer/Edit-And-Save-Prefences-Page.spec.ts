import testOptions from "../../../src/config/TestOptions";
import { test } from "../../pages/fixtures";

const roles = ['enduser', 'officer'];

roles.forEach((role) => {
  test.describe.parallel(`Personal Calendar For ${role} User`, () => {

    const credentails = testOptions[role];

    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.action.loginWithCredentials(credentails.role);
        await loginPage.assertion.isDashboardTextVisible("Dashboard");
        await dashboardPage.action.goToPrefencesLeftBar();

    });

    test(`Edit and Save Phone Number for ${role} User`, async({ prefencesPage }, testInfo) => {
        await prefencesPage.action.clickPhoneNumberField();
        await prefencesPage.action.fillPhoneNumberTextFiled('(553) 113-5422');
        await prefencesPage.assertion.isSavedNumberVisible();
    });

    test(`Edit and Save Message Notifications for ${role} User`, async({ prefencesPage }, testInfo) => {
        await prefencesPage.action.clickMessageNotificationButton();
        await prefencesPage.action.checkMailRadioButton();
        await prefencesPage.action.saveNotification();
        await prefencesPage.action.clickMessageNotificationButton();
        await prefencesPage.action.uncheckMailRadioButton();
        await prefencesPage.action.saveNotification();
    });

    test(`Edit and Save Requests for ${role} User`, async({ prefencesPage }, testInfo) => {
        await prefencesPage.action.clickRequestNotificationButton();
        await prefencesPage.action.checkSMSRequestRadioButton();
        await prefencesPage.action.saveNotification();
        await prefencesPage.action.clickRequestNotificationButton();
        await prefencesPage.action.uncheckSMSRequestRadioButton();
        await prefencesPage.action.saveNotification();
        await prefencesPage.assertion.issuccessMessageRequestsVisible();
    });

  }); 

}); 


