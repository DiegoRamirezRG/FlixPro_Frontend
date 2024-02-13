import { ReactNode, useEffect, useState } from "react"
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/auth/AuthContext";
import './ProtectedRouteStyle.scss';
import { LoadingComp } from "../../../components/loadingComp/LoadingComp";

export const ProtectedRouteMiddleware = ( { children } : { children: ReactNode }) => {

    const { getTokensAuthorized, getReAuthByRefreshToken } = useAuthContext();

    const [isLoading, setIsLoading] = useState(true);
    const [isValid, setisValid] = useState<boolean | null>(null);

    useEffect(() => {
        const awaitFunction = async () => {
            if(localStorage.getItem('access_token') != null && localStorage.getItem('access_token') != ''){
                try {
                    
                    await getTokensAuthorized();
                    setisValid(true);
                } catch (error: any) {
                    try {
                        await getReAuthByRefreshToken();
                        setisValid(true);
                    } catch (error: any) {
                        setisValid(false);
                        console.log(error.message);
                    }
                } finally {
                    setIsLoading(false);

                }
            }else{
                setIsLoading(false);
                setisValid(false);
            }
        }

        awaitFunction();
    }, [])
    

    if(!isLoading){
        return isValid 
            ?   <>{ children }</> 
            :   <Navigate to='/'/>
    }else{
        return (
            <div className="loading_overlay">
                <div className="loadingContainer">
                    <LoadingComp/>
                </div>
            </div>
        )
    }
}
