import { Page, TestInfo, expect } from "@playwright/test";
import { CoreAssertion } from "../../../src/assertion/CoreAssertion";
import { LoginLocator } from "./locator";

export class LoginAssertion extends CoreAssertion {
  
  public locator: LoginLocator;

  constructor(page: Page, testInfo: TestInfo) {
    super(page, testInfo);
    this.locator = new LoginLocator(page, testInfo);
  }

  
  async isDashboardTextVisible(expected: string) {
    await expect(this.locator.dashBoardText).toContainText(expected);
  }

  async isDashboardTextVisibleForAdmin(expected: string) {
    await expect(this.locator.adminDashBoardText).toContainText(expected);
  }

  async isFailedLoginMessageVisible(expected: string) {
    await expect(this.locator.failedLoginMessage).toContainText(expected);
  }
}
