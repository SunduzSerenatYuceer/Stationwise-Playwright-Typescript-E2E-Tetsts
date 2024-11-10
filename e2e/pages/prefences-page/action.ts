import { Page, TestInfo } from "@playwright/test";
import { CoreAction } from "../../../src/action/CoreAction";
import { PrefencesLocator } from "./locator";

export class PrefencesAction extends CoreAction {

    private locator : PrefencesLocator;

    constructor(page : Page, testInfo : TestInfo) {
        super(page, testInfo);
        this.locator = new PrefencesLocator(page, testInfo);
    }

   async clickPhoneNumberField() {
        await this.locator.phoneNumberField.click();
   }

   async fillPhoneNumberTextFiled(value : string) {
        await this.locator.phoneNumberTextField.click();
        await this.locator.phoneNumberTextField.fill(value);
   }

   async clickSaveNumber() {
        await this.locator.savePhoneNumber.click();
   }

   async clickMessageNotificationButton() {
        await this.locator.messageNotification.click();
   }

   async checkMailRadioButton() {
        await this.locator.mailRadioButton.check();
   }

   async uncheckMailRadioButton() {
        await this.locator.mailRadioButton.uncheck();
   } 

   async saveNotification() {
        await this.locator.saveNotification.click();
   }

   async clickRequestNotificationButton() {
        await this.locator.requestNotificationButton.click();
   }

   async checkSMSRequestRadioButton() {
        await this.locator.SMSRequestRadioButton.check();
   }

   async uncheckSMSRequestRadioButton() {
    await this.locator.SMSRequestRadioButton.uncheck();
}

}