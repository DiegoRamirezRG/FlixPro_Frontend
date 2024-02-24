import { AuthTokens, ReAuthRefresh } from "../authInterfaces/AuthContextInterfaces";
import { UserInterface } from "../userInterfaces/UserInterface";

export type ApiDataBody = 
        AuthTokens
    |   UserInterface
    |   ReAuthRefresh
    |   string
    |   null
    |   boolean
    |   any;