import { Page, TestInfo} from "@playwright/test";

export interface ILocator {

    readonly page : Page;
    readonly testInfo : TestInfo;
    
}