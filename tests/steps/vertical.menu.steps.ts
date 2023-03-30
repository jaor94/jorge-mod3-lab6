import { Given, Then } from "@cucumber/cucumber";
import { expect } from "chai";
import { Context } from "../../cucumber.config";
import { verticalMenu } from "../../src/pages/components/vertical-menu.page";

Given('the user hovers the mouse on Projects label on the Vertical Menu', async function () {    
    await verticalMenu.hoverProjectLabel();
});

Given('the user clicks the Add Project Icon on the Vertical Menu', async function () {    
    await verticalMenu.clickAddProject();    
});

Then('the user should see the New Project on the Vertical Menu', async function (this: Context) {
    const projectName = this.scenarioContext.PROJECTNAME as string;   
    const [isVisible, elementText] = await verticalMenu.getProjectNameInformation(projectName);    
    expect(isVisible).true;
    expect(elementText).equal(projectName);
});
