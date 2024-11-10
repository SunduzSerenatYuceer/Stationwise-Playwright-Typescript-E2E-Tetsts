import testOptions from "../../../src/config/TestOptions";
import { test } from "../../pages/fixtures";
import { LoginPage } from "../../pages/login-page/page";

const roles = ['enduser', 'officer'];

roles.forEach((role) => {
  test.describe.parallel(`Personal Calendar For ${role} User`, () => {

    const credentails = testOptions[role];

    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.action.loginWithCredentials(credentails.role);
        await loginPage.assertion.isDashboardTextVisible("Dashboard");
        await dashboardPage.action.goToPersonalCalendarLeftBar();

    });

    test(`Request Additional Paid Time and Cancel It on old date that has Regular Ticket on Month Option for ${role} User`, async({ personalCalendarPage, dashboardPage }, testInfo) => {
      await personalCalendarPage.action.clickPersonalDashboardOnTopBar();
      await dashboardPage.action.goToPersonalCalendarLeftBar();
      await personalCalendarPage.action.clickOptionList();
      await personalCalendarPage.action.clickOptionMonth();
      await personalCalendarPage.action.clickPreviousDateSelector();
      await personalCalendarPage.action.clickPreviousRegularDay();
      await personalCalendarPage.page.waitForTimeout(3000);
      await personalCalendarPage.action.clickPreviousRegularDayBelowText();
      await personalCalendarPage.page.waitForTimeout(3000);
      await personalCalendarPage.action.clickRequestAdditionalTimeButton();
      await personalCalendarPage.page.waitForTimeout(3000);
      await personalCalendarPage.action.clickHeldOverButton();
      await personalCalendarPage.action.clickPaidTimeHr();
      await personalCalendarPage.page.getByLabel('3 hours', { exact: true });
      await personalCalendarPage.page.getByLabel('30 minutes');
      await personalCalendarPage.action.clickSavePaidTime();
      await personalCalendarPage.action.clickNoteField();
      await personalCalendarPage.page.getByRole('textbox').fill('test filled');
      await personalCalendarPage.action.submitRequest();
      await personalCalendarPage.assertion.isSuccessRequestMessageVisible();
    });


    test(`Trade Shift and on future date that has Regular Ticket on Month Option for ${role} User`, async({ personalCalendarPage, dashboardPage }, testInfo) => {
      await personalCalendarPage.action.clickNextDateSelector();
      await personalCalendarPage.action.clickFutureRegularDay();
      await personalCalendarPage.page.waitForTimeout(3000);
      await personalCalendarPage.action.clickFutureRegularDayBelowText();
      await personalCalendarPage.page.waitForTimeout(3000);
      await personalCalendarPage.action.clickTradeShiftButton();
      await personalCalendarPage.page.waitForTimeout(3000);
      await personalCalendarPage.page.locator('div').filter({ hasText: /^4 hrs$/ }).click();
      await personalCalendarPage.action.clickSelectPeopleButton();
      await personalCalendarPage.page.locator('div').filter({ hasText: /^Nathan Edwards$/ }).first().click();
      await personalCalendarPage.action.clickRequestShiftTradeButton();
      await personalCalendarPage.assertion.isSuccessShiftTradeMessageVisible();
      await personalCalendarPage.action.clickGoBackToCalendarButton();
    });



  }); 

}); 


