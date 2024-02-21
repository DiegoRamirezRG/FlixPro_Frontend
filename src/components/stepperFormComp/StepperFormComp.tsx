import { useState } from 'react'
import './StepperFormStyle.scss'
import { AiFillApi, AiOutlineCheck } from 'react-icons/ai';
import { RiListSettingsFill } from 'react-icons/ri';
import { LuGoal } from 'react-icons/lu';
import { stepItem } from '../../interfaces/stepperInterfaces/StepperInterfaces';
import { CinemaGlobalConfig, InitConfigFinished, StartInitConfig, TMDBApiConfig } from './innerStepsComp/InnerStepsComp';
import { ValidateStepCinema, ValidateTMDBApiCredentials } from './validator/StepsValidator';
import { useConfigWizardContext } from '../../contexts/configWizard/ConfigWizard';
import { showErrorTost } from '../toastComp/ToastComp';

export const StepperFormComp = () => {
    const [activeStep, setActiveStep] = useState<number>(0);
    const { initConfigValues } = useConfigWizardContext();

    const stepsObjOptRender: stepItem[] = [
        { icon: <LuGoal className='bubble_icon'/>, title: 'Comencemos' },
        { icon: <RiListSettingsFill className='bubble_icon'/>, title: 'Cinema' },
        { icon: <AiFillApi className='bubble_icon'/>, title: 'TMDB' },
        { icon: <AiOutlineCheck className='bubble_icon'/>, title: 'Finalizado' },
    ];

    const stepsObjCompRender : Map<number, JSX.Element> = new Map<number, JSX.Element>([
        [0, <StartInitConfig/>],
        [1, <CinemaGlobalConfig/>],
        [2, <TMDBApiConfig/>],
        [3, <InitConfigFinished/>],
    ]);

    const validateNextStep = async () => {
        try {
            switch (activeStep) {
                case 0:
                    setActiveStep(activeStep + 1);
                    break;
                case 1:
                    await ValidateStepCinema(initConfigValues.name, initConfigValues.logo!);
                    setActiveStep(activeStep + 1);
                    break;
                case 2:
                    await ValidateTMDBApiCredentials(initConfigValues.tmdb_access_token, initConfigValues.tmdb_api_key);
                    setActiveStep(activeStep + 1);
                    break;
            }
        } catch (error: any) {
            showErrorTost(error, 'bottom-center');
        }
    }

    return (
        <section className='steper_container'>
            <header>
                <h3>Configuracion inicial</h3>
                <div className="steps_roadmap">
                    <div className="steper_bar_indicator">
                        <div className="steper_bar_completed"></div>
                    </div>
                    {
                        stepsObjOptRender.map((item, index) => (
                            <div className="step_bubble" key={index}>
                                <div className={`bubble_active ${index == activeStep ? 'active' : index < activeStep ? 'finished' : 'inactive'}`}>
                                    <div className="bubble_inner">
                                        { item.icon }
                                        <span className='bubble_floating_title'> {item.title} </span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="step_active_render">
                    {
                        stepsObjCompRender.get(activeStep)
                    }
                </div>
                <div className="steper_footer">
                    <button className='btn btn-primary' disabled={activeStep == 0 ? true : false} onClick={() => setActiveStep(activeStep - 1)}>Anterior</button>
                    <button className='btn btn-primary' style={{display: activeStep == stepsObjOptRender.length - 1 ? 'none' : 'flex'}} disabled={activeStep == stepsObjOptRender.length - 1 ? true : false} onClick={validateNextStep}>Siguiente</button>
                    <button className='btn btn-success' style={{display: activeStep == stepsObjOptRender.length - 1 ? 'flex' : 'none'}}>Guardar y comenzar</button>
                </div>
            </header>
        </section>
    )
}