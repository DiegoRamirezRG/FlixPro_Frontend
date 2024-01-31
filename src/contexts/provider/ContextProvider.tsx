import { ReactNode } from 'react'

interface contextProviderInterface {
    children: ReactNode;
}

export const ContextProvider = ({ children } : contextProviderInterface) => {
    return (
        <>
            { children }
        </>
    )
}
