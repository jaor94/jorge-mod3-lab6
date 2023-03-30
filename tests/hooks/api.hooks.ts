import { After, Before } from "@cucumber/cucumber";
import { CustomWorld } from "../../cucumber.config";
// import { HttpRequest } from "../../src/core/api/http-request";
import { Projects } from "../../src/core/api/todoist-requests/projects";

Before({name: 'Before API Hook', tags: '@api-tests'},async function() {
    //new HttpRequest();
    // const respp = await Projects.getProjects();
    // console.log(respp.data);
});
/*
After({name: 'Delete Project', tags: '@delete-project-api'},async function(this: CustomWorld) {
    //new HttpRequest();
    
    //Get Project ID from API request
    const projects = await (await Projects.getProjects()).data;
    console.log(projects);
    
    for(let project of projects) {
        console.log(project);
        if(project.name == this.scenarioContext['PROJECTNAME']) {
            console.log(project.id);  
            await Projects.deleteProject(project.id);          
        }
    }

    // const respp = await Projects.getProjects();
    // console.log(respp.data);
});


// After({name: 'After API Hook', tags: '@api-tests'},async function() {
//     await driverInstance.closeDriver();
// });
*/