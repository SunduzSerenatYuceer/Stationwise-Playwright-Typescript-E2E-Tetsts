import { test as base, Fixtures } from "@playwright/test";
import { LoginPage } from "../pages/login-page/page";
import { DashboardPage } from "./dashboard-page/page";
import { PersonalCalendarPage } from "./personal-calendar-page/page";
import { PrefencesPage } from "./prefences-page/page";

interface Pages {
    loginPage : LoginPage;
    dashboardPage : DashboardPage;
    personalCalendarPage: PersonalCalendarPage;
    prefencesPage: PrefencesPage;
}

export const test = base.extend<Pages>({
    loginPage : async({ page }, use, testInfo) => {
        await use(new LoginPage(page, testInfo));
    },

    dashboardPage : async({page}, use, testInfo) => {
        await use(new DashboardPage(page, testInfo));
    },

    personalCalendarPage : async({page}, use, testInfo) => {
        await use(new PersonalCalendarPage(page, testInfo));
    },

    prefencesPage : async({page}, use, testInfo) => {
        await use(new PrefencesPage(page, testInfo));
    }

});
