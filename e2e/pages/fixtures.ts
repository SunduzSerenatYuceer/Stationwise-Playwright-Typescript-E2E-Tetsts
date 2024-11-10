import { test as base, Fixtures } from "@playwright/test";
import { LoginPage } from "../pages/login-page/page";
import { DashboardPage } from "./dashboard-page/page";

interface Pages {
    loginPage : LoginPage;
    dashboardPage : DashboardPage;
}

export const test = base.extend<Pages>({
    loginPage : async({ page }, use, testInfo) => {
        await use(new LoginPage(page, testInfo));
    },

    dashboardPage : async({page}, use, testInfo) => {
        await use(new DashboardPage(page, testInfo));
    }

});
