import { Page as BasePage, TestInfo } from "@playwright/test";
import { CorePage } from "../../../src/page/CorePage";
import { PayrollAction } from "./action";
import { PayrollAssertion } from "./assertion";

export class PayrollPage extends CorePage {

    public action: PayrollAction;
    public assertion: PayrollAssertion;
  
    constructor(page: BasePage, testInfo: TestInfo) {
  
      super(page, testInfo);
      this.action = new PayrollAction(page, testInfo);
      this.assertion = new PayrollAssertion(page, testInfo);
  
    }
}