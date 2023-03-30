import { driverInstance } from "./driver";

export class MouseActions {
    static async hover(locator: string) {
        await driverInstance.Page.waitForSelector(locator);
        await driverInstance.Page.hover(locator);
    }
}