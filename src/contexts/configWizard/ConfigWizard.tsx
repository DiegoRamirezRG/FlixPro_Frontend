import { createContext, useContext, useState } from "react";
import { ConfigWizardContextInterface, initConfigValuesInterface } from "../../interfaces/configWizardInterfaces/ConfigWizardInterfaces";
import { ContextProviderInterface } from "../../interfaces/contextsInterfaces/ProviderInterfaces";
import { apiServiceProvider } from "../../config/api/ApiRestConfig";
import { ApiResponse } from "../../interfaces/apiInterfaces/ApiResponseInterface";


const ConfigWizardContext = createContext<ConfigWizardContextInterface | undefined>(undefined);

export const ConfigWizardContextProvider = ({ children } : ContextProviderInterface) => {
    
    //Data States
    const [initConfigValues, setInitConfigValues] = useState<initConfigValuesInterface>({
        name: '',
        logo: null,
        logoRender: null,
        tmdb_access_token: '',
        tmdb_api_key: '',
    });

    //Init Config State
    const getInitConfigState = (): Promise<boolean> => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await apiServiceProvider.get<ApiResponse>('/api/v1/cinemaWizard/status', {
                    headers: {
                        Authorization: localStorage.getItem('access_token')
                    }
                });

                if(response.data.success){
                    resolve(true);
                }
            } catch (error) {
                console.error(error);
                reject(error);
            }
        });
    }

    //Handle initConfigState
    const handleInitConfigInputs = (name: string, value: any) => {
        setInitConfigValues((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    //Context Values
    const context: ConfigWizardContextInterface = {
        getInitConfigState,
        initConfigValues,
        handleInitConfigInputs,
    }

    //Return Provider
    return (
        <ConfigWizardContext.Provider value={context}>
            { children }
        </ConfigWizardContext.Provider>
    )
};

export const useConfigWizardContext = () : ConfigWizardContextInterface => {
    const context = useContext(ConfigWizardContext);
    if(context == undefined){
        throw new Error('useConfigWizardContext debe ser utilizado dentro de un Context Provider');
    }
    return context;
}