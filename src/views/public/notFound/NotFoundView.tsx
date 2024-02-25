import { useNavigate } from 'react-router-dom'
import './NotFoundStyle.scss'

export const NotFoundView = () => {
    const navigate = useNavigate();

    return (
        <div className="maxContainer">
            <div className='notfoundedView'>
                <img src="/public/Icon_Color.svg" alt="" />
                <span className='decor_span'>Oops!</span>
                <h1>404 - Pagina no encontrada</h1>
                <span>La página que buscabas no existe.</span>
                //TODO: Agregar animacion de lottie
                <button className='btn btn-primary' onClick={() => navigate('/dashboard')}>Volver</button>
            </div>
        </div>
    )
}
