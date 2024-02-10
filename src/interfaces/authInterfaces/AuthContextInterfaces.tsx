export interface AuthContextInterface {
    getAuthorized: (email: string, password: string) => Promise<void>;
}

export interface AuthTokens {
    refresh_token: string;
    access_token:  string;
}
