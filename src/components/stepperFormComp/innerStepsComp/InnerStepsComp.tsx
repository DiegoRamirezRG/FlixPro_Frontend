import { SiThemoviedatabase } from 'react-icons/si'
import { DropzoneComp } from '../../dropzoneComp/DropzoneComp'
import { InputTextComp } from '../../inputTextComp/InputTextComp'
import './InnerStepsStyle.scss'
import { FaDownload } from 'react-icons/fa'
import { useConfigWizardContext } from '../../../contexts/configWizard/ConfigWizardContext'
import { useCallback, useRef, useState } from 'react'
import { IoTrash } from 'react-icons/io5'
import { TbRotate } from 'react-icons/tb'

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
    const { initConfigValues, handleInitConfigInputs } = useConfigWizardContext();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const setImage = useCallback((acceptedFile: File[]) => {
        handleInitConfigInputs('logo', acceptedFile[0]);

        const reader = new FileReader();
        reader.onload = () => {
            handleInitConfigInputs('logoRender', reader.result as string);
        };

        reader.readAsDataURL(acceptedFile[0]);
    }, []);

    const handleButtonClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files && event.target.files[0];
        if (selectedFile) {
            setImage([selectedFile]);
        }
    };

    return (
        <section className="inner_step_container">
            <div className="cinemaConfig">
                <div className="cinema_form">
                    <InputTextComp id={'cinema-name'} name={'name'} label={'Nombre de tu Cinema'} placeholder={'Cinemax Movies Plus'} type={'text'} onChangeFunc={ handleInitConfigInputs } value={initConfigValues.name} putBorder={true}/>
                    <div className="imageIcon">
                        {
                            initConfigValues.logo
                            ?   <div className='image_render'>
                                    <img src={ initConfigValues.logoRender! }  alt="CINEMA_IMG" />
                                    <div className="imageOptions">
                                        <input type="file" accept='image/*' style={{display: 'none'}}onChange={ handleFileChange } ref={fileInputRef}/>
                                        <button className='btn btn-danger text-white' onClick={() => handleInitConfigInputs('logo', null)}><IoTrash size={25}/></button>
                                        <button className='btn btn-warning text-white' onClick={ handleButtonClick }><TbRotate size={25} style={{transform: 'rotate(180deg)'}}/></button>
                                    </div>
                                </div>
                            :   <DropzoneComp  label='Logo de tu Cinema (Opcional)' onDrop={setImage}/>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export const TMDBApiConfig = () => {

    const openTMDB = () => window.open('https://www.themoviedb.org/signup', '_blank');
    const { initConfigValues, handleInitConfigInputs } = useConfigWizardContext();

    return (
        <div className='inner_step_container'>
            <div className="tmbdApiConfig">
                <div className="tmdb_form">
                    <p>Para configurar las peliculas utilizamos el servicio gratuito de <em>The Movie Database</em> por lo cual necesitamos que cree una cuenta y coloque las claves llamadas <em>Access Token Auth</em> y <em>API Key Auth</em>. Para ello puedes ir al link the <em>The Movie Data Base</em> y con ayuda de nuestras instrucciones realizar lo necesario.</p>
                    <div className="tmbd_guide">
                        <button className='btn btn-tmdb text-white' type='button' onClick={ openTMDB }><SiThemoviedatabase /> TMBD</button>
                        <button className='btn btn-danger text-white'><FaDownload /> Ver guia</button>
                    </div>
                    <InputTextComp id={'tmdb_api_key'} name={'tmdb_api_key'} label={'API Key Auth'} placeholder={'API Key Auth'} type={'text'} onChangeFunc={handleInitConfigInputs} value={initConfigValues.tmdb_api_key} putBorder={true}/>
                    <InputTextComp id={'tmdb_access_token'} name={'tmdb_access_token'} label={'Access Token Auth'} placeholder={'Access Token Auth'} type={'text'} onChangeFunc={handleInitConfigInputs} value={initConfigValues.tmdb_access_token} putBorder={true}/>
                </div>
            </div>
        </div>
    )
}

export const InitConfigFinished = () => {
    return (
        <div className='inner_step_container'>
            <div className="finishedConfig">
                <span>¡Excelente, ya podemos comenzar!</span>
                <p>De momento eso es todo, ya puedes utilizar Flix Pro. Todavia hace falta algunas configuraciones en otras partes pero lo basico ya quedo listo. <em>Comencemos esta aventura</em>.</p>
                <img src="/src/assets/svg/finish_config_image.svg" alt="DONE_IMG" />
            </div>
        </div>
    )
}
