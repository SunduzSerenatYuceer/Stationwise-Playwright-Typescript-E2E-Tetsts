import { Page , TestInfo } from "@playwright/test";

export interface IPage {
    
    readonly page : Page;
    readonly testInfo : TestInfo;

}