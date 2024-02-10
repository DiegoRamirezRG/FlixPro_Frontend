import { createContext, useContext } from "react";
import { AuthContextInterface } from "../../interfaces/authInterfaces/AuthContextInterfaces";
import { ContextProviderInterface } from "../../interfaces/contextsInterfaces/ProviderInterfaces";
import { apiServiceProvider } from '../../config/api/ApiRestConfig';
import { ApiResponse } from "../../interfaces/apiInterfaces/ApiResponseInterface";
import { showErrorTost, showSuccessToast } from "../../components/toastComp/ToastComp";
import Cookies from 'js-cookie';

const AuthContext = createContext<AuthContextInterface | undefined>(undefined);

export const AuthContextProvider = ({ children } : ContextProviderInterface) => {

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

                showSuccessToast(response.data.message, 'top-right');
            }
        } catch (error: any) {
            showErrorTost(error.response.data.message ? error.response.data.message : error.message, 'top-right');
        }
    }

    //Context Values
    const context: AuthContextInterface = {
        getAuthorized,
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