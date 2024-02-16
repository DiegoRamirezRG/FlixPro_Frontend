import { useState } from 'react'
import './StepperFormStyle.scss'
import { AiFillApi, AiOutlineCheck } from 'react-icons/ai';
import { RiListSettingsFill } from 'react-icons/ri';
import { LuGoal } from 'react-icons/lu';
import { stepItem } from '../../interfaces/stepperInterfaces/StepperInterfaces';
import { CinemaGlobalConfig, InitConfigFinished, StartInitConfig, TMDBApiConfig } from './innerStepsComp/InnerStepsComp';

export const StepperFormComp = () => {
    const [activeStep, setActiveStep] = useState<number>(0);

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
                    <button className='btn btn-primary' disabled={activeStep == stepsObjOptRender.length - 1 ? true : false} onClick={() => setActiveStep(activeStep + 1)}>Siguiente</button>
                </div>
            </header>
        </section>
    )
}
