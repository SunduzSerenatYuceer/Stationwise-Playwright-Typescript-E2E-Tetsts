import { Page as BasePage, TestInfo } from "@playwright/test";
import { CorePage } from "../../../src/page/CorePage";
import { PersonalCalendarAction } from "./action";
import { PersonalCalendarAssertion } from "./assertion";

export class PersonalCalendarPage extends CorePage {
  public action: PersonalCalendarAction;
  public assertion: PersonalCalendarAssertion;

  constructor(page: BasePage, testInfo: TestInfo) {

    super(page, testInfo);
    this.action = new PersonalCalendarAction(page, testInfo);
    this.assertion = new PersonalCalendarAssertion(page, testInfo);

  }
}
