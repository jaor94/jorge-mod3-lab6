import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class HeaderPage extends BasePage {
    private homeIcon: string = 'button[data-gtm-id="burger-home-button"]';

    constructor(){
        super();
    }
    
    async isHomeIconVisible(): Promise<boolean> {
        return ElementActions.isElementVisible(this.homeIcon);
    }
}

export const headerPage = new HeaderPage();