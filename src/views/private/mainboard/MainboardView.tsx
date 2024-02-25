import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/auth/AuthContext'
import { useConfigWizardContext } from '../../../contexts/configWizard/ConfigWizardContext';
import './MainboardStyle.scss'
import { StepperFormComp } from '../../../components/stepperFormComp/StepperFormComp';
import { LoadingComp } from '../../../components/loadingComp/LoadingComp';
import { LayoutWrapperComp } from '../../../components/layoutWrapperComp/LayoutWrapperComp';

export const MainboardView = () => {

    const { loggedUser } = useAuthContext();
    const { getInitConfigState, isConfigFinished } = useConfigWizardContext();
    const [isMainboardLoading, setIsMainboardLoading] = useState<boolean>(true);

    useEffect(() => {
        if(loggedUser){
            const awaitFunction = async () => {
                await getInitConfigState();
                setIsMainboardLoading(false);
            }

            awaitFunction();
        }
    }, []);

    return (
        <div className='maxContainer'>
            {
                isMainboardLoading
                ?   <div className="loading_overlay">
                        <div className="loadingContainer">
                            <LoadingComp/>
                        </div>
                    </div>
                :   <main className="mainbord_collider_box">
                        {
                            isConfigFinished
                            ?   <LayoutWrapperComp>
                                    <>Hola mundo</>
                                </LayoutWrapperComp>
                            :   <StepperFormComp/>
                        }
                    </main>
            }
        </div>
    )
}
