import { CoreLocator } from "../../../src/locator/CoreLocater";

export class PayrollLocator extends CoreLocator {

    // Enduser and Officer Role Locators
    
    // Admin Role Locators
    private _searchPeopleTextField = this.page.getByPlaceholder('Search for people in your team');
    private _exportTimeCardButton = this.page.getByRole('button', { name: 'Export time card' });
    private _IIF_exportType = this.page.getByText('IIF');
    private _customPeriod = this.page.getByText('Custom');
    private _startDatePicker = this.page.getByLabel('Choose date, selected date is Nov 1,');
    private _endDatePicker = this.page.getByLabel('Choose date, selected date is Nov 30,');
    private _addFilterButton = this.page.getByRole('button', { name: 'Add Filter' });
    private _payCodeSelect = this.page.getByPlaceholder('Select pay code/s');
    private _overTimeShift = this.page.getByRole('option', { name: 'Overtime Shift', exact: true });
    private _detailCodeSelect = this.page.getByPlaceholder('Select detail code/s');
    private _communityEvent = this.page.getByRole('option', { name: 'Community Event' });
    private _exportButton = this.page.getByRole('button', { name: 'Export' });
    private _cancelButton = this.page.getByRole('button', { name: 'Cancel' });


    private _rankFilter = this.page.getByText('Rank', { exact: true });
    private _apparatusOp = this.page.getByRole('option', { name: 'Apparatus Operator' });
    private _shiftFilter = this.page.getByText('Shift', { exact: true });
    private _FShift = this.page.getByRole('option', { name: 'F Shift' });
    private _enmployeeSignedFilter = this.page.getByText('Employee Signed');
    private _employeeSigned = this.page.getByRole('option', { name: 'Employee Signed' });
    private _appr1Filter = this.page.getByText('Appr1 Approved');
    private _appr1NotOption = this.page.getByRole('option', { name: 'APPR 1 Not Approved' });
    private _appr2Filter = this.page.getByText('Appr2 Approved');
    private _appr2NotOption = this.page.getByRole('option', { name: 'APPR 2 Approved' });
    private _expectedPerson = this.page.getByRole('checkbox', { name: 'D Debra Gardner dgardner@' });


    public get searchPeopleTextField() {
        return this._searchPeopleTextField;
    }

    public get ExportTimeCardButton() {
        return this._exportTimeCardButton;
    }

    public get IIFExportType() {
        return this._IIF_exportType;
    }

    public get customPeriod() {
        return this._customPeriod;
    }

    public get startDatePicker() {
        return this._startDatePicker;
    }

    public get endDatePicker() {
        return this._endDatePicker;
    }

    public get filterButton() {
        return this._addFilterButton;
    }

    public get payCodeSelect() {
        return this._payCodeSelect;
    }

    public get overTimeShift() {
        return this._overTimeShift;
    }

    public get detailCodeSelect() {
        return this._detailCodeSelect;
    }

    public get communityEvent() {
        return this._communityEvent;
    }

    public get exportButton() {
        return this._exportButton;
    }

    public get cancelButton() {
        return this._cancelButton;
    }

    public get rankFilter() {
        return this._rankFilter;
    }

    public get apparatusOp() {
        return this._apparatusOp;
    }

    public get shiftFilter() {
        return this._cancelButton;
    }

    public get FShift() {
        return this._FShift;
    }
    
    public get enmployeeSignedFilter() {
        return this._enmployeeSignedFilter;
    }

    public get employeeSigned() {
        return this._employeeSigned;
    }

    public get appr1Filter() {
        return this._appr1Filter;
    }

    public get appr1NotOption() {
        return this._appr1NotOption;
    }

    public get appr2Filter() {
        return this._appr2Filter;
    }

    public get appr2NotOption() {
        return this._appr2NotOption;
    }

    public get expectedPerson() {
        return this._expectedPerson;
    }

}