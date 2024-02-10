import { ContextProviderInterface } from '../../interfaces/contextsInterfaces/ProviderInterfaces';
import { AuthContextProvider } from '../auth/AuthContext';

export const ContextProvider = ({ children } : ContextProviderInterface) => {
    return (
        <AuthContextProvider>
            { children }
        </AuthContextProvider>
    )
}
