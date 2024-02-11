import { UserInterface } from "../userInterfaces/UserInterface";

export interface AuthContextInterface {
    loggedUser: UserInterface | null;
    getAuthorized: (email: string, password: string) => Promise<void>;
    getTokensAuthorized: () => Promise<boolean>;
    getReAuthByRefreshToken: () => Promise<boolean>;
}

export interface AuthTokens {
    refresh_token: string;
    access_token:  string;
}

export interface ReAuthRefresh {
    access_token: string;
    loggedUser: UserInterface;
}
