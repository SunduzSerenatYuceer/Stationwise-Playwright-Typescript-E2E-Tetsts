import { Page, TestInfo } from "@playwright/test";

export interface IAction {

    readonly page : Page;
    readonly testInfo : TestInfo;

}