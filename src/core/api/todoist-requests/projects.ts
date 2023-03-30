import { AxiosResponse } from "axios";
import { HttpRequest } from "../http-request";

export class Projects {
    static async getProjects(): Promise<AxiosResponse>{
        return await HttpRequest.get('projects');
        // return await HttpRequest.get('projects/2308752452');
    }

    static async deleteProject(projectID: string): Promise<AxiosResponse>{        
        return await HttpRequest.delete(`projects/${projectID}`);
    }
}

