import { ElementActions } from "../core/element-actions";

export class BasePage {
    constructor(){}

    async isElementDisplayed(locator: string): Promise<boolean> {        
        return ElementActions.isElementVisible(locator);
    }
}
