import { Page, TestInfo, expect } from "@playwright/test";
import { CoreAssertion } from "../../../src/assertion/CoreAssertion";
import { DashboardLocator } from "./locator";

export class DashboardAssertion extends CoreAssertion {

    private locator : DashboardLocator;

    constructor(page : Page, testInfo : TestInfo) {
        super(page, testInfo);
        this.locator = new DashboardLocator(page, testInfo);
    }


}