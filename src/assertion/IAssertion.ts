import { Page, TestInfo } from "@playwright/test";

export interface IAssertion {

    readonly page : Page;
    readonly testInfo : TestInfo;

}