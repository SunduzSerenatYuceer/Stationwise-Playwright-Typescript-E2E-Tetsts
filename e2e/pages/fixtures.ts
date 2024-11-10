import { test as base, Fixtures } from "@playwright/test";
import { LoginPage } from "../pages/login-page/page";

interface Pages {
    loginPage : LoginPage;
}

export const test = base.extend<Pages>({
    loginPage : async({ page }, use, testInfo) => {
        await use(new LoginPage(page, testInfo));
    }
});