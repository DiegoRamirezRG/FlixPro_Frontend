import { ContextProviderInterface } from '../../interfaces/contextsInterfaces/ProviderInterfaces';
import { AuthContextProvider } from '../auth/AuthContext';
import { ConfigWizardContextProvider } from '../configWizard/ConfigWizard';

export const ContextProvider = ({ children } : ContextProviderInterface) => {
    return (
        <AuthContextProvider>
            <ConfigWizardContextProvider>
                { children }
            </ConfigWizardContextProvider>
        </AuthContextProvider>
    )
}
