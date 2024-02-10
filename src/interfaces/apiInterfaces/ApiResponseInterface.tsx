import { ApiDataBody } from "./ApiDataBodyInterfaces";

export interface ApiResponse {
    success: boolean;
    message: string;
    data?: ApiDataBody;
    error?: string | any;
}