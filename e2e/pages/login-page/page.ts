import { Page as BasePage, TestInfo } from "@playwright/test";
import { CorePage } from "../../../src/page/CorePage";
import { LoginAction } from "./action";
import { LoginAssertion } from "./assertion";

export class LoginPage extends CorePage {
  
  public action: LoginAction;
  public assertion: LoginAssertion;

  constructor(page: BasePage, testInfo: TestInfo) {

    super(page, testInfo);
    this.action = new LoginAction(page, testInfo);
    this.assertion = new LoginAssertion(page, testInfo);

  }
}
