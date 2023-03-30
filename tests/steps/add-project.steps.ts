import { Given, When } from "@cucumber/cucumber";
import { Context } from "../../cucumber.config";
import { addProjectPane } from "../../src/pages/components/add-project.page";

Given('the user sets {string} as Project Name on the Add Project popup', async function (this: Context, projectName: string) {
    this.scenarioContext['PROJECTNAME'] = projectName;
    await addProjectPane.setProjectName(projectName);
});

Given("the user sets {string} as Project name, {string} as project color, {string} as favorite and {string} as type", async function(this: Context, projectName: string, projectColor:string, favoriteValue:string, projectType:string){
    this.scenarioContext['PROJECTNAME'] = projectName;
    await addProjectPane.createNewProject(projectName, projectColor, favoriteValue, projectType);    
});

Given('the user sets {string} as Project Color', async function (this: Context, projectColor:string){
    await addProjectPane.selectColor(projectColor);
});

Given('the user sets the new project as favorite {string}', async function (this: Context, fav:string){
    await addProjectPane.setFavorite(fav);
});

Given('the user sets the new project as a {string}', async function (this: Context, tipo:string){
    await addProjectPane.setType(tipo);
});

When('the user clicks the Add Button on the Add Project popup', async function () {
    await addProjectPane.clickAdd();
});

