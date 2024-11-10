import { Page as BasePage, TestInfo } from "@playwright/test";
import  { CorePage } from "../../../src/page/CorePage";
import { DashboardAction } from "./action";
import { DashboardAssertion } from "./assertion";

export class DashboardPage extends CorePage {

    private action : DashboardAction;
    private assertion : DashboardAssertion;

    constructor(page : BasePage, testInfo: TestInfo) {

        super(page, testInfo);
        this.action = new DashboardAction(page, testInfo);
        this.assertion = new DashboardAssertion(page, testInfo);
        
    }

}