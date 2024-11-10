import { Page, TestInfo, expect } from "@playwright/test";
import { CoreAssertion } from "../../../src/assertion/CoreAssertion";
import { PayrollLocator } from "./locator";

export class PayrollAssertion extends CoreAssertion {

    public locator: PayrollLocator;

    constructor(page: Page, testInfo: TestInfo) {
      super(page, testInfo);
      this.locator = new PayrollLocator(page, testInfo);
    }

  async isExpectedPersonVisible(expected: string) {
    await expect(this.locator.expectedPerson).toBeVisible();
  }

}