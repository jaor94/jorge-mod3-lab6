import { IWorldOptions, setWorldConstructor, World } from "@cucumber/cucumber";

export interface Context {
    scenarioContext: { [id: string]: unknown };
}

export class CustomWorld extends World implements Context {    
    scenarioContext: { [id: string]: unknown; } = {};
    
    constructor(options: IWorldOptions) {
      super(options);       
    }
  }
  
setWorldConstructor(CustomWorld);
