import { afterEach } from "node:test";
import { test } from "../../pages/fixtures";
import { PrefencesAction } from "../../pages/prefences-page/action";


test.describe.parallel(`Personal Calendar For Admin User`, () => {


    test.beforeEach(async ({ loginPage, dashboardPage }) => {
        await loginPage.action.loginWithCredentials("admin");
        await loginPage.assertion.isDashboardTextVisibleForAdmin("Dashboard");
        await dashboardPage.action.goToPayrollAdmin();

    });

    test(`Export Tme Card By Using Search Field`, async({ payrollPage }, testInfo) => {
        await payrollPage.action.fillSearchField("Dylan");
        await payrollPage.page.getByRole('checkbox', { name: 'D Dylan Johnson djohnson@' }).getByRole('checkbox').check();
        await payrollPage.action.clickExportTimeCardButton();
        await payrollPage.action.clickIIFExportType();
        await payrollPage.action.clickCustomPeriod();
        await payrollPage.action.clickStartDatePicker();
        await payrollPage.page.getByRole('gridcell', { name: '14' }).click();
        await payrollPage.action.clickEndDatePicker();
        await payrollPage.page.getByRole('gridcell', { name: '28' }).click();
        await payrollPage.action.clickFilterButton();
        await payrollPage.action.clickPayCodeSelect();
        await payrollPage.action.clickOverTimeShift();
        await payrollPage.action.clickDetailCodeSelect();
        await payrollPage.action.clickCommunityEvent();
        await payrollPage.action.clickExportButton();
        await payrollPage.action.clickCancelButton();
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
