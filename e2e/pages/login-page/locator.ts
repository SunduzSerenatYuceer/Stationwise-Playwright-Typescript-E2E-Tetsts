import { CoreLocator } from "../../../src/locator/CoreLocater";

export class LoginLocator extends CoreLocator {
    
    private _mailInput = this.page.getByPlaceholder('you@example.gov');
    private _passwordInput = this.page.getByLabel('Password', { exact: true });
    private _loginButton = this.page.getByRole('button', { name: 'Sign in' });
    private _dashboardText = this.page.getByTestId('dashboard-main').getByText('Dashboard'); 
    private _failedLoginMessage = this.page.getByText('Email or password is incorrect');

    // admin user
    private _adminDashboardText = this.page.getByText('Dashboard', { exact: true });


    public get mailInput() {
        return this._mailInput;
    }

    public set mailInput(mailInput) {
        this._mailInput = mailInput;
    }

    public get passwordInput() {
        return this._passwordInput;
    }

    public set passwordInput(passwordInput) {
        this._passwordInput = passwordInput;
    }

    public get loginButton() {
        return this._loginButton;
    }

    public set loginButton(loginButton) {
        this._loginButton = loginButton;
    }

    public get dashBoardText() {
        return this._dashboardText;
    }

    public get adminDashBoardText() {
        return this._adminDashboardText;
    }

    public get failedLoginMessage() {
        return this._failedLoginMessage;
    }
}