import { CoreLocator } from "../../../src/locator/CoreLocater";

export class PersonalCalendarLocator extends CoreLocator {

    // Coomon Locators

    private _optionList = this.page.getByText('L', { exact: true });
    private _optionMonth = this.page.getByText('M', { exact: true });
    
    // Enduser and Officer Role Locators

    private _personalDashboard_topBar = this.page.getByLabel('Personal Dashboard').nth(1);
    private _personalCalendar_topBar = this.page.getByLabel('Personal Calendar').nth(1);  
    private _previousMonth = this.page.getByRole('img').nth(1);
    private _nextMonth = this.page.getByRole('img').nth(2);  
    private _previous_dateSelector = this.page.getByTestId('calendar-date-selector').getByRole('img').first();
    private _next_dateSelector = this.page.getByTestId('calendar-date-selector').locator('path').nth(1);
    private _previousRegularDay = this.page.getByText('F9REGULAR');
    private _futureRegularDay = this.page.getByText('F2REGULAR');
    private _previousRegularDayBelowText = this.page.getByText('REGULAR10/9/2410/10/2408:00-08:');
    private _futureRegularDayBelowText = this.page.getByText('REGULAR12/2/2412/3/2408:00-08:');


    private _requestAdditionalTimeButton = this.page.locator('div').filter({ hasText: /^Request additional paid time$/ }).nth(1);
    private _heldOverButton = this.page.getByRole('button', { name: 'Held Over' });
    private _additional_paidTime_Hr = this.page.getByText('0HRS');
    private _additional_paidTimeSaveButton = this.page.getByRole('button', { name: 'Save' });
    private _noteField = this.page.getByRole('textbox');
    private _submit_requestAdditionalTimeButton = this.page.getByRole('button', { name: 'Submit additional paid time' });
    private _success_requestAdditionalTime = this.page.getByText('Your additional paid time');

    private _tradeShiftButton = this.page.locator('div').filter({ hasText: /^Trade shift$/ }).first();
    private _selectPeopleButton = this.page.getByRole('button', { name: 'Select people to trade with' });
    private _requestShiftTradeButton = this.page.getByRole('button', { name: 'Request shift trade' });
    private _success_requestShiftTrade = this.page.getByText('Your shift trade request has');
    private _goBackToCalendarButton = this.page.getByRole('button', { name: 'Go back to calendar' });

    // Admin Role Locators

    private _personalDashboard_topBar_Admin = this.page.getByLabel('Personal Dashboard');
    private _personalCalendar_topBar_Admin = this.page.getByLabel('Personal Calendar');  
    private _previousMonth_Admin = this.page.getByTestId('calendar-date-selector').getByRole('img').first();
    private _nextMonth_Admin = this.page.getByTestId('calendar-date-selector').getByRole('img').nth(1)  ;   


    public get optionList() {
        return this._optionList;
    }

    public get optionMonth() {
        return this._optionMonth;
    }

    public get personalDashboard_topBar() {
        return this._personalDashboard_topBar;
    }

    public get personalDashboard_topBar_Admin() {
        return this._personalDashboard_topBar_Admin;
    }

    public get personalCalendar_topBar() {
        return this._personalCalendar_topBar;
    }

    public get personalCalendar_topBar_Admin() {
        return this._personalCalendar_topBar_Admin;
    }

    public get previousMonth() {
        return this._previousMonth;
    }

    public get previousMonth_Admin() {
        return this._previousMonth_Admin;
    }

    public get nextMonth() {
        return this._nextMonth;
    }

    public get nextMonth_Admin() {
        return this._nextMonth_Admin;
    }

    public get previous_dateSelector() {
        return this._previous_dateSelector;
    }

    public get next_dateSelector() {
        return this._next_dateSelector;
    }

    public get previousRegularDay() {
        return this._previousRegularDay;
    }

    public get previousRegularDayBelowText() {
        return this._previousRegularDayBelowText;
    }

    public get requestAdditionalTimeButton() {
        return this._requestAdditionalTimeButton;
    }

    public get heldOverButton() {
        return this._heldOverButton;
    }

    public get paidTimeHr() {
        return this._additional_paidTime_Hr;
    }

    public get savePaidTime() {
        return this._additional_paidTimeSaveButton;
    }

    public get noteField() {
        return this._noteField;
    }

    public get SubmitRequest() {
        return this._submit_requestAdditionalTimeButton;
    }

    public get SuccessRequestMessage() {
        return this._success_requestAdditionalTime;
    }

    public get futureRegularDay() {
        return this._futureRegularDay;
    }

    
    public get futureRegularDayBelowText() {
        return this._futureRegularDayBelowText;
    }

    public get tradeShiftButton() {
        return this._tradeShiftButton;
    }

    public get selectPeopleButton() {
        return this._selectPeopleButton;
    }

    public get requestShiftTradeButton() {
        return this._requestShiftTradeButton;
    }

    public get successShiftTradeMessage() {
        return this._success_requestShiftTrade;
    }

    public get backToCalendar() {
        return this._goBackToCalendarButton;
    }

}