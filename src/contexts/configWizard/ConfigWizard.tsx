import { createContext, useContext } from "react";
import { ConfigWizardContextInterface } from "../../interfaces/configWizardInterfaces/ConfigWizardInterfaces";
import { ContextProviderInterface } from "../../interfaces/contextsInterfaces/ProviderInterfaces";


const ConfigWizardContext = createContext<ConfigWizardContextInterface | undefined>(undefined);

export const ConfigWizardContextProvider = ({ children } : ContextProviderInterface) => {
    

    //Context Values
    const context: ConfigWizardContextInterface = {

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