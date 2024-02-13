import { IoAt } from 'react-icons/io5';
import { InputTextComp } from '../../../components/inputTextComp/InputTextComp';
import './LoginStyle.scss';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { useAuthContext } from '../../../contexts/auth/AuthContext';
import { FormEvent, useEffect, useState } from 'react';
import { EmailRegex } from '../../../utils/constant/RegexCostants';
import { showErrorTost } from '../../../components/toastComp/ToastComp';
import { LoadingComp } from '../../../components/loadingComp/LoadingComp';
import { useNavigate } from 'react-router-dom';

export const LoginView = () => {

    const { getAuthorized, getTokensAuthorized, loggedUser, getReAuthByRefreshToken } = useAuthContext();
    const [loginViewLoading, setLoginViewLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const awaitFunc = async () => {
            try {
                await getTokensAuthorized();
            } catch (error) {
                try {
                    await getReAuthByRefreshToken();
                } catch (error_b: any) {
                    showErrorTost(error_b.message, 'top-right');
                }
            } finally {
                setLoginViewLoading(false);
            }
        }
        
        awaitFunc();
    }, []);

    useEffect(() => {
        if(loggedUser != null){
            navigate('/mainboard');
        }
    }, [loggedUser]);

    const [loginFormState, setLoginFormState] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (name: string, value: string) => {
        setLoginFormState((prevState) => ({
            ...prevState,
            [name] : value
        }));
    }

    const loginSubmit = async (e: FormEvent) => {
        try {
            e.preventDefault();
            setLoginViewLoading(true);

            if(loginFormState.email == '' || !EmailRegex.test(loginFormState.email)){
                showErrorTost('El correo es invalido, por favor coloque un correo valido.', 'top-right');
                return;
            }else if(loginFormState.password == ''){
                showErrorTost('La contraseña no puede estar vacia.', 'top-right');
                return;
            }else{
                await getAuthorized(loginFormState.email, loginFormState.password);
                await getTokensAuthorized();
            }
        } catch (error: any) {
            showErrorTost(error.message ? error.message : error, 'top-right');
        } finally {
            setLoginViewLoading(false);
        }
    }

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
                        <form onSubmit={loginSubmit}>
                            <InputTextComp id='email'       label='Email'       name='email'    key='input_email'       placeholder='Email'     type='email'    onChangeFunc={handleInputChange}    value={loginFormState.email}    iconBtn={ <IoAt /> }/>
                            <InputTextComp id='password'    label='Password'    name='password' key='input_password'    placeholder='Password'  type='password' onChangeFunc={handleInputChange}    value={loginFormState.password}  />
                            <p className='forgot_password'><a href="">Forgot password?</a></p>
                            <button type='submit' className='form_btn'>Log in</button>
                        </form>
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
            {
                loginViewLoading && 
                <div className='loading-overlay'>
                    <section className="loadingContainer">
                        <LoadingComp/>
                    </section>
                </div>
            }
        </div>
    )
}
