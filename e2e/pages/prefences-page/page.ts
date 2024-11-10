import { Page as BasePage, TestInfo } from "@playwright/test";
import  { CorePage } from "../../../src/page/CorePage";
import { PrefencesAction } from "./action"; 
import { PrefencesAssertion } from "./assertion";

export class PrefencesPage extends CorePage {

    public action : PrefencesAction;
    public assertion : PrefencesAssertion;

    constructor(page : BasePage, testInfo: TestInfo) {

        super(page, testInfo);
        this.action = new PrefencesAction(page, testInfo);
        this.assertion = new PrefencesAssertion(page, testInfo);

    }

}