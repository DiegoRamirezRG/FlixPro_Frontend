import { createContext, useContext, useState } from "react";
import { AuthContextInterface } from "../../interfaces/authInterfaces/AuthContextInterfaces";
import { ContextProviderInterface } from "../../interfaces/contextsInterfaces/ProviderInterfaces";
import { apiServiceProvider } from '../../config/api/ApiRestConfig';
import { ApiResponse } from "../../interfaces/apiInterfaces/ApiResponseInterface";
import Cookies from 'js-cookie';
import { UserInterface } from "../../interfaces/userInterfaces/UserInterface";

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthContextProvider = ({ children } : ContextProviderInterface) => {
    //General States
    const [loggedUser, setLoggedUser] = useState<UserInterface | null>(null);

    //Loggin Func
    const getAuthorized = async (email: string, password: string) => {
        try {
            const response = await apiServiceProvider.post<ApiResponse>('/api/v1/auth/getAuth', {
                email,
                password
            });
    
            if (!response.data.success) {
                throw new Error(response.data.message);
            }else{
                Cookies.set('refresh_token', response.data.data?.refresh_token!, { expires: 30 });
                localStorage.setItem('access_token', response.data.data?.access_token!);
            }
        } catch (error: any) {
            console.error(error);
        }
    }

    //Token Authorized
    const getTokensAuthorized = async () => {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const response = await apiServiceProvider.get<ApiResponse>('/api/v1/auth/getAccessValidate', {
                    params: {
                        access_token: localStorage.getItem('access_token')
                    }
                });
    
                if(response.data.success){
                    setLoggedUser(response.data.data);
                    resolve(true);
                }else{
                    reject();
                }
            } catch (error: any) {
                localStorage.clear();
                console.error(error);
                reject(error);
            }
        })
    }

    //Refresh Token Re-Auth
    const getReAuthByRefreshToken = () => {
        return new Promise<boolean>(async (resolve, reject) => {
            try {
                const response = await apiServiceProvider.post<ApiResponse>('/api/v1/auth/reAuthByRefresh', {
                    refresh_token: Cookies.get('refresh_token')
                });

                if(response.data.success){
                    localStorage.setItem('access_token', response.data.data.access_token);
                    setLoggedUser(response.data.data.loggedUser);
                }else{
                    throw new Error('Token caducado, por favor inicia sesion nuevamente');
                }
                resolve(true);
            } catch (error) {
                Cookies.remove('refresh_token');
                console.error(error);
                reject(error);
            }
        })
    }

    //Context Values
    const context: AuthContextInterface = {
        loggedUser,
        getAuthorized,
        getTokensAuthorized,
        getReAuthByRefreshToken,
    }

    //Return Provider
    return (
        <AuthContext.Provider value={context}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuthContext = () : AuthContextInterface => {
    const context = useContext(AuthContext);
    if(context == undefined){
        throw new Error('useAuthContext debe ser utilizado dentro de un Context Provider');
    }
    return context;
}