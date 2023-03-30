import { After, Before, Status } from "@cucumber/cucumber";
import { TESTDATA } from "../../config.app";
import { CustomWorld } from "../../cucumber.config";
import { driverInstance } from "../../src/core/driver";

Before({name: 'Before UI Hook', tags: '@ui-tests'},async function() {
    await driverInstance.start(TESTDATA.url);
});

After({name: 'After UI Hook', tags: '@ui-tests'},async function() {    
    await driverInstance.closeDriver();
});

After({name: 'Take Screenshot', tags: '@ui-tests'},async function(this: CustomWorld, scenario) {
    if(scenario.result?.status == Status.FAILED) {
        const image = await driverInstance.Page.screenshot();
        this.attach(image, 'image/png');
    }
});