import { driverInstance } from "../../core/driver";
import { ElementActions } from "../../core/element-actions";
import { BasePage } from "../base.page";

class AddProject extends BasePage {
    private nameTextField: string = 'input#edit_project_modal_field_name';
    private addButton: string = "button[type='Submit']";
    //private addButton: string = '//span[text()="Add"]//parent::button';
    private cancelButton: string = '//span[text()="Cancel"]//parent::button';    

    // Extra Points add select the following behavior
    private colorDropdownbutton: string ='button[aria-labelledby="edit_project_modal_field_color_label"]';
    private colorDropdown =async (color: string) => `div[class='dropdown_select--popup color_dropdown_select']>ul>li[data-value='${color}']`;
        
    private favoritesToggle: string = "span.reactist_switch--handle";
    private optionListView: string = "div[role='radiogroup']>label>div>span>button[aria-labelledby='project_list_view_style_option']";
    private optionBoardView: string = "div[role='radiogroup']>label>div>span>button[aria-labelledby='project_list_board_style_option']";
    
    constructor(){
        super();
    }

    async setProjectName(projectName: string) {
        await ElementActions.setText(this.nameTextField, projectName);
    }

    async clickAdd() {
        await ElementActions.click(this.addButton);
    }

    async clickCancel() {
        await ElementActions.click(this.cancelButton);
    }

    async clickRemove() {
        await ElementActions.click(this.addButton);
    }

    async createNewProject(projectName: string, color: string, isFavorite: string, view: string) {
        await ElementActions.setText(this.nameTextField, projectName);
        await ElementActions.click(this.colorDropdownbutton);
        await ElementActions.click(await this.colorDropdown(color));
        if(isFavorite=="true"){
            await ElementActions.click(this.favoritesToggle);
        }
        if(view=="List"){
            await ElementActions.click(this.optionListView);
            await driverInstance.Page.waitForTimeout(3000);
        }else if(view=="Board"){
            await ElementActions.click(this.optionBoardView);
            await driverInstance.Page.waitForTimeout(3000);
        }        
    }

    async selectColor(color:string){
        await ElementActions.click(this.colorDropdownbutton);
        await ElementActions.click(await this.colorDropdown(color));
    }

    async setFavorite(valor:string){
        if(valor=="true"){
            await ElementActions.click(this.favoritesToggle);
        }
    }

    async setasList(){
        await ElementActions.click(this.optionListView);
        
    }

    async setasBoard(){
        await ElementActions.click(this.optionBoardView);
        
    }
    async setType(tipo:string){
        if(tipo=="List"){
            await ElementActions.click(this.optionListView);
        }else if(tipo =="Board"){
            await ElementActions.click(this.optionBoardView);
        }
        await driverInstance.Page.waitForTimeout(3000);
    }
}

export const addProjectPane = new AddProject();