import { Page, TestInfo, expect } from "@playwright/test";
import { CoreAssertion } from "../../../src/assertion/CoreAssertion";
import { PrefencesLocator } from "./locator";

export class PrefencesAssertion extends CoreAssertion {

    private locator : PrefencesLocator;

    constructor(page : Page, testInfo : TestInfo) {
        super(page, testInfo);
        this.locator = new PrefencesLocator(page, testInfo);
    }

    async isSavedNumberVisible() {
        expect(this.locator.savedPhoneNumber).toBeVisible();
    }

    async issuccessMessageRequestsVisible() {
        expect(this.locator.successMessageRequests).toBeVisible();
    }




}