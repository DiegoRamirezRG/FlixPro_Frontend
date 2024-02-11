import './LoadingStyle.scss';
import { Player } from '@lottiefiles/react-lottie-player'
import animation from './lottie/loading_animation.json'

export const LoadingComp = () => {
    return (
        <div className='loading_wrapper'>
            <Player
                autoplay={true}
                loop={true}
                controls={false}
                src={animation}
                className='animation'
                speed={0.5}
            ></Player>
        </div>
    )
}