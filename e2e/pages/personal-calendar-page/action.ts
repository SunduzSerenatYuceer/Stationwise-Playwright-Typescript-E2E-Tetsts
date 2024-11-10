import { Page, TestInfo } from "@playwright/test";
import { CoreAction } from "../../../src/action/CoreAction";
import { PersonalCalendarLocator } from "./locator"; 

export class PersonalCalendarAction extends CoreAction {

    private locator : PersonalCalendarLocator;

    constructor(page : Page, testInfo : TestInfo) {
        super(page, testInfo);
        this.locator = new PersonalCalendarLocator(page, testInfo);
    }


    async clickOptionList() {
        await this.locator.optionList.waitFor({state : "visible"});
        await this.locator.optionList.click({force : true});
    }

    async clickOptionMonth() {
        await this.locator.optionMonth.waitFor({state : "visible"});
        await this.locator.optionMonth.click({force: true});
    }

    async clickPersonalDashboardOnTopBar() {
        await this.locator.personalDashboard_topBar.first().click();
    }

    async clickPersonalDashboardOnTopBarAdmin() {
        await this.locator.personalDashboard_topBar_Admin.click();
    }

    async clickPersonalCalendarOnTopBar() {
        await this.locator.personalCalendar_topBar.first().click();
    }

    async clickPersonalCalendarOnTopBarAdmin() {
        await this.locator.personalCalendar_topBar_Admin.click();
    }

    async clickPreviousMonth() {
        await this.locator.previousMonth.click();
    }

    async clickPreviousMonthAdmin() {
        await this.locator.previousMonth_Admin.click();
    }

    async clickNextMonth() {
        await this.locator.nextMonth.click();
    }

    async clickNextMonthAdmin() {
        await this.locator.nextMonth_Admin.click();
    }

    async clickPreviousDateSelector() {
        await this.locator.previous_dateSelector.click();
    }

    async clickNextDateSelector() {
        await this.locator.next_dateSelector.click();
    }

    async clickPreviousRegularDay() {
        await this.locator.previousRegularDay.click();
    }

    async clickPreviousRegularDayBelowText() {
        await this.locator.previousRegularDayBelowText.click();
    }

    async clickRequestAdditionalTimeButton() {
        await this.locator.requestAdditionalTimeButton.click();
    }
    
    async clickHeldOverButton() {
        await this.locator.heldOverButton.click();
    }

    async clickPaidTimeHr() {
        await this.locator.paidTimeHr.click();
    }

    async clickSavePaidTime() {
        await this.locator.savePaidTime.click();
    }

    async clickNoteField() {
        return this.locator.noteField.click();
    }

    async submitRequest() {
        await this.locator.SubmitRequest.click();
    }

    async clickFutureRegularDay() {
        await this.locator.futureRegularDay;
    }

    
    async clickFutureRegularDayBelowText() {
        await this.locator.futureRegularDayBelowText.click();
    }

    async clickTradeShiftButton() {
        await this.locator.tradeShiftButton.click();
    }

    async clickSelectPeopleButton() {
        await this.locator.selectPeopleButton.click();
    }

    async clickRequestShiftTradeButton() {
        await this.locator.requestShiftTradeButton.click();
    }

    async clickGoBackToCalendarButton() {
        await this.locator.backToCalendar.click();
    }

}