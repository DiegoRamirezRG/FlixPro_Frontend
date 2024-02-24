import { useEffect, useState } from 'react';
import { useAuthContext } from '../../../contexts/auth/AuthContext'
import { useConfigWizardContext } from '../../../contexts/configWizard/ConfigWizardContext';
import './MainboardStyle.scss'
import { StepperFormComp } from '../../../components/stepperFormComp/StepperFormComp';

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
                ?   'Loading'
                :   <main className="mainbord_collider_box">
                        {
                            isConfigFinished
                            ?   <div>MainboardView</div>
                            :   <StepperFormComp/>
                        }
                    </main>
            }
        </div>
    )
}
