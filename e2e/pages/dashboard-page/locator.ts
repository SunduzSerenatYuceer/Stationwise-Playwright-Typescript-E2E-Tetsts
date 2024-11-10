import { CoreLocator } from "../../../src/locator/CoreLocater";

export class DashboardLocator extends CoreLocator {

    //Enduser and Officer Role Locators
    private _personalCalendar_topBar = this.page.getByLabel('Personal Calendar').nth(1);
    private _personalCalendar_leftBar = this.page.getByLabel('Personal Calendar').first();
    private _prefences_leftBar = this.page.getByLabel('Preferences');
    private _profilButton = this.page.getByRole('button', { name: 'A', exact: true });
    private _signoutButton = this.page.getByRole('button', { name: 'Sign out' });

    //Admin Role Locators
    private _more_leftBar = this.page.getByLabel('More');
    private _personalCalendar_admin = this.page.getByRole('button', { name: 'Personal Calendar' });
    private _prefences_admin = this.page.getByRole('button', { name: 'Preferences' });
    private _payroll_admin = this.page.getByLabel('Payroll');

    
    public get personalCalendar_topBar() {
        return this._personalCalendar_topBar;
    }

    public get personalCalendar_leftBar() {
        return this._personalCalendar_leftBar;
    }

    public get prefences_leftBar() {
        return this._prefences_leftBar;
    }

    public get more_leftBar() {
        return this._more_leftBar;
    }

    public get personalCalendar_admin() {
        return this._personalCalendar_admin;
    }

    public get prefences_admin() {
        return this._prefences_admin;
    }

    public get payroll_admin() {
        return this._payroll_admin;
    }

    
    public get profilButton() {
        return this._profilButton;
    }

    public get signoutButton() {
        return this._signoutButton;
    }


}