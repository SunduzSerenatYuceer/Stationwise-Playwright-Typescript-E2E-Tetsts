import { Page, TestInfo } from "@playwright/test";
import { CoreAction } from "../../../src/action/CoreAction";
import { PayrollLocator } from "./locator"; 

export class PayrollAction extends CoreAction {

    public locator : PayrollLocator;

    constructor(page : Page, testInfo : TestInfo) {
        super(page, testInfo);
        this.locator = new PayrollLocator(page, testInfo)
    }

    async fillSearchField(value : string) {
        await this.locator.searchPeopleTextField.click();
        await this.locator.searchPeopleTextField.fill(value);
    }

    async clickExportTimeCardButton() {
        await this.locator.ExportTimeCardButton.click();
    }

    async clickIIFExportType() {
        await this.locator.IIFExportType.click();
    }

    async clickCustomPeriod() {
        await this.locator.customPeriod.click();
    }

    async clickStartDatePicker() {
        await this.locator.startDatePicker.click();
    }

    async clickEndDatePicker() {
        await this.locator.endDatePicker.click();
    }

    async clickFilterButton() {
        await this.locator.filterButton.click();
    }

    async clickPayCodeSelect() {
        await this.locator.payCodeSelect.click();
    }

    async clickOverTimeShift() {
        await this.locator.overTimeShift.click();
    }

    async clickDetailCodeSelect() {
        await this.locator.detailCodeSelect.click();
    }

    async clickCommunityEvent() {
        await this.locator.communityEvent.click();
    }
    
    async clickExportButton() {
        await this.locator.exportButton.click();
        const downloadPromise = this.page.waitForEvent('download');
    }

    async clickCancelButton() {
        await this.locator.cancelButton.click();
    }

    async clickRankFilter() {
        await this.locator.rankFilter.click();
    }

    async clickApparatusOp() {
        await this.locator.apparatusOp.click();
    }

    async clickShiftFilter() {
        await this.locator.shiftFilter.click();
    }

    async clickFShift() {
        await this.locator.FShift.click();
    }

    async clickEmployeeSignedFilter() {
        await this.locator.enmployeeSignedFilter.click();
    }

    async clickEmployeeSigned() {
        await this.locator.employeeSigned.click();
    }

    async clickAppr1Filter() {
        await this.locator.appr1Filter.click();
    }

    async clickAppr1NotOption() {
        await this.locator.appr1NotOption.click();
    }

    async clickAppr2Filter() {
        await this.locator.appr2Filter.click();
    }

    async clickAppr2NotOption() {
        await this.locator.appr2NotOption.click();
    }

    async clickExpectedPerson() {
        await this.locator.expectedPerson.click();
    }


}
