import { CoreLocator } from "../../../src/locator/CoreLocater";

export class PrefencesLocator extends CoreLocator {

    private _phoneNumberField = this.page.getByText('No phone number');
    private _phoneNumberTextField = this.page.getByPlaceholder('(100) 000-');
    private _savePhoneNumber = this.page.getByRole('button', { name: 'Save Phone Number' });
    private _savedPhoneNumber = this.page.locator('div').filter({ hasText: /^\(553\) 113-5422$/ }).first();

    private _messageNotificationButton = this.page.locator('div').filter({ hasText: /^Messages$/ }).first();
    private _emailRadioButton = this.page.getByRole('checkbox').nth(1);
    private _saveNotificationButton = this.page.getByRole('button', { name: 'Save Notification Changes' });

    private _requestsButton = this.page.locator('div').filter({ hasText: /^Requests$/ }).nth(1);
    private _smsRadioButton = this.page.getByRole('checkbox').first();
    private _successMessageForRequestNototification = this.page.getByText('Your notification preferences');

    public get phoneNumberField() {
        return this._phoneNumberField;
    }

    public get phoneNumberTextField() {
        return this._phoneNumberTextField;
    }

    public set phoneNumberTextField(phoneNumberTextField) {
        this._phoneNumberTextField = phoneNumberTextField;
    }

    public get savePhoneNumber() {
        return this._savePhoneNumber;
    }

    public get savedPhoneNumber() {
        return this._savedPhoneNumber;
    }

    public get messageNotification() {
        return this._messageNotificationButton;
    }

    public get mailRadioButton() {
        return this._emailRadioButton;
    }

    public get saveNotification() {
        return this._saveNotificationButton;
    }

    public get requestNotificationButton() {
        return this._requestsButton;
    }

    public get SMSRequestRadioButton() {
        return this._smsRadioButton;
    }

    public get successMessageRequests() {
        return this._successMessageForRequestNototification;
    }

}