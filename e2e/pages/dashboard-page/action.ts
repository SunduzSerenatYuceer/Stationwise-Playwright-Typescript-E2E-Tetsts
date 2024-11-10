import { Page, TestInfo } from "@playwright/test";
import { CoreAction } from "../../../src/action/CoreAction";
import { DashboardLocator } from "./locator";

export class DashboardAction extends CoreAction {

    private locator : DashboardLocator;

    constructor(page : Page, testInfo : TestInfo) {
        super(page, testInfo);
        this.locator = new DashboardLocator(page, testInfo);
    }

    async goToPersonalCalendarTopBar() {
        await this.locator.personalCalendar_topBar.click();
    }

    async goToPersonalCalendarLeftBar() {
        await this.locator.personalCalendar_leftBar.click();
    }

    async goToPersonalCalendarAdmin() {
        await this.locator.more_leftBar.click();
        await this.locator.personalCalendar_admin.click();
    }

    async goToPrefencesLeftBar() {
        await this.locator.prefences_leftBar.click();
    }

    async goToPrefencesAdmin() {
        await this.locator.prefences_admin.click();
    }

    async goToPayrollAdmin() {
        await this.locator.payroll_admin.click();
    }

}