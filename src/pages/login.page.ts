import { ElementActions } from "../core/element-actions";
import { BasePage } from "./base.page";

class LoginPage extends BasePage {
    private email: string = 'input[type="email"]';
    private password: string = 'input[type="password"]';
    private loginButton: string = 'button[data-gtm-id="start-email-login"]';

    constructor(){
        super();
    }

    async setEmail(text: string) {        
        await ElementActions.setText(this.email, text);
    }

    async setPassword(text: string) {        
        await ElementActions.setText(this.password, text);
    }

    async clickLogin() {
        await ElementActions.click(this.loginButton);
    }

    async login(emailInput: string, passwordInput: string) {
        await ElementActions.setText(this.email, emailInput);
        await ElementActions.setText(this.password, passwordInput);
        await ElementActions.click(this.loginButton);
    }
}

export const loginPage = new LoginPage();