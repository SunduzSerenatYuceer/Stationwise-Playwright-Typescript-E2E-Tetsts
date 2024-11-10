import { Page, TestInfo } from "@playwright/test";
import { CoreAction } from "../../../src/action/CoreAction";
import { LoginLocator } from "./locator";
import testOptions from "../../../src/config/TestOptions";

export class LoginAction extends CoreAction{

    public locator : LoginLocator;

    constructor(page: Page, testInfo: TestInfo) {
        super(page, testInfo);
        this.locator = new LoginLocator(page, testInfo);
    }

    async goToLoginPage() {
        await this.page.goto(`${testOptions.webURL}`, {
          waitUntil: "networkidle",
        });
    }

    async fillUsernameInput(value: string) {
        await this.locator.mailInput.fill(value);
      }
    
    async fillPasswordInput(value: string) {
    await this.locator.passwordInput.fill(value);
    }
    
    async clickLoginButton() {
    await this.locator.loginButton.click();
    }

    async loginWithCredentials(role : 'enduser'|'officer'|'admin') {

        const credentails = testOptions[role];

        await this.goToLoginPage();
        await this.fillUsernameInput(credentails.mail);
        await this.fillPasswordInput(testOptions.password);
        await this.clickLoginButton();
      }

}