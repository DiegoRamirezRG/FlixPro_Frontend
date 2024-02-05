import { IoAt } from 'react-icons/io5';
import { InputTextComp } from '../../../components/inputTextComp/InputTextComp';
import './LoginStyle.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

export const LoginView = () => {
    return (
        <div className='maxContainer'>
            <div className="login_card">
                <header>
                    <img src="/Icon_Color.svg" alt="app_icon" />
                </header>
                <section>
                    <article className='form_header'>
                        <p className='form_banner'>LETS GET TO WORK</p>
                        <h1 className='form_title'>Log into your account<em>.</em></h1>
                        <p className='form_switcher'>No Acount? No Biggie <a href="">Register here</a>.</p>
                    </article>
                    <article className='form_inputs'>
                        <InputTextComp id='email'       label='Email'       name='email'    key='input_email'       placeholder='Email'     type='email'    iconBtn={ <IoAt /> }/>
                        <InputTextComp id='password'    label='Password'    name='password' key='input_password'    placeholder='Password'  type='password' />
                        <p className='forgot_password'><a href="">Forgot password?</a></p>
                        <button type='button' className='form_btn'>Log in</button>
                    </article>
                    <article className='linked_sing_up'>
                        <p>Or Sign Up Using</p>
                        <div className="linked_balls_media">
                            <div className="ball facebook_ball"><FaFacebookF /></div>
                            <div className="ball google_ball"><FaGoogle /></div>
                        </div>
                    </article>
                </section>
            </div>
            <div className="login_banner">
                <div className="banner_overlay"></div>
                <img src="/src/assets/svg/Logo_White.svg" alt="image_decor" className='login_decor'/>
            </div>
        </div>
    )
}
