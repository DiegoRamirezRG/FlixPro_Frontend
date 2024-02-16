import { InputTextComp } from '../../inputTextComp/InputTextComp'
import './InnerStepsStyle.scss'

export const StartInitConfig = () => {
    return (
        <section className="inner_step_container">
            <div className="initConfig">
                <span>Bienvenido a Flix Pro</span>
                <p>Notamos que eres un usuario que no ha terminado la configuracion necesaria para utilizar Flix Pro. Por lo tanto vamos a configurar para que puedas manejar tu cinema desde Flix Pro de manera util y sencilla.</p>
                <img src="/src/assets/svg/init_config_image.svg" alt="INIT_IMG" />
            </div>
        </section>
    )
}

export const CinemaGlobalConfig = () => {
    return (
        <section className="inner_step_container">
            <div className="cinemaConfig">
                <div className="cinema_form">
                    <InputTextComp id={''} name={''} label={'Nombre de tu Cinema'} placeholder={'Cinemax Movies Plus'} type={'text'} onChangeFunc={() => {}} value={undefined}/>
                    <div className="imageIcon">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export const TMDBApiConfig = () => {
    return (
        <div>TMDBApiConfig</div>
    )
}

export const InitConfigFinished = () => {
    return (
        <div>InitConfigFinished</div>
    )
}
