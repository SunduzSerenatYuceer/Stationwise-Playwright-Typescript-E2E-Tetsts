import { Page, TestInfo, expect } from "@playwright/test";
import { CoreAssertion } from "../../../src/assertion/CoreAssertion";
import { PersonalCalendarLocator } from "./locator";

export class PersonalCalendarAssertion extends CoreAssertion {
  public locator: PersonalCalendarLocator;

  constructor(page: Page, testInfo: TestInfo) {
    super(page, testInfo);
    this.locator = new PersonalCalendarLocator(page, testInfo);
  }

  async isSuccessRequestMessageVisible() {
    expect(this.locator.SuccessRequestMessage).toBeVisible;
  }

  async isSuccessShiftTradeMessageVisible() {
    expect(this.locator.successShiftTradeMessage).toBeVisible;
  }


}