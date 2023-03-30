import { ElementActions } from "../../core/element-actions";
import { MouseActions } from "../../core/mouse-actions";
import { BasePage } from "../base.page";

class VerticalMenuPage extends BasePage {
    private addProjectButton: string = 'button[aria-label="Add project"]';
    private projectsLabel: string = '//div[@id="left_menu_inner"]//div[text()="Projects"]';

    private projectName = (projectName: string) => `//ul[@id="projects_list"]//span[text()="${projectName}"]`;

    constructor() {
        super();
    }

    async clickAddProject(): Promise<void> {
        await ElementActions.click(this.addProjectButton);
    }

    async hoverProjectLabel() {
        await MouseActions.hover(this.projectsLabel);
    }

    async getProjectNameInformation(projName: string) {
        const projetNameLocator = this.projectName(projName);
        const isVisible = await ElementActions.isElementVisible(projetNameLocator);
        const projectText = await ElementActions.getElementText(projetNameLocator);        
        return [isVisible, projectText];
    }
}

export const verticalMenu = new VerticalMenuPage();