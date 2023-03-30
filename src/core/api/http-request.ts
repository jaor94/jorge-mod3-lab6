import axios, { AxiosResponse } from "axios";
import { TESTDATA } from "../../../config.app";

export class HttpRequest {
    constructor() {        
        axios.defaults.headers.common.Authorization = `Bearer ${TESTDATA.apiToken}`;
        axios.defaults.baseURL = TESTDATA.apiUrl;
    }

    static async get(service: string): Promise<AxiosResponse> {
        const response = await axios.get(service);        
        return response;
    }

    static async delete(service: string): Promise<AxiosResponse> {
        const response = await axios.delete(service);        
        return response;
    }
}

export const httpRequest = new HttpRequest();