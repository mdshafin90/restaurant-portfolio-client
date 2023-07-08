import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/loginImage/login.png'
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const [disabled, setDisabled] = useState(true)
    const { userSignIn } = useAuth();
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)

        userSignIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    icon: 'success',
                    title: 'Awesome',
                    text: 'Logged In Successfully With Your Email & Password',
                })
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    const handleValidateCaptcha = (event) => {
        const user_captcha_value = event.target.value;
        if (validateCaptcha(user_captcha_value) === true) {
            setDisabled(false)

            Swal.fire({
                icon: 'success',
                title: 'WoW',
                text: 'You are Awesome Captcha Matched Successfully',
            })
        }
        else {
            setDisabled(true)
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Your Captcha does'nt Match Yet Please Try Again",
            })
        }
    }

    return (
        <>
            <Helmet>
                <title>Happy Grill | Login</title>
            </Helmet>
            <div className="my-10">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center lg:text-left">
                            <p className='text-center text-4xl font-extrabold mb-4'>Login !!!</p>
                            <img src={loginImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input type="text" onBlur={handleValidateCaptcha} name='captcha' placeholder="Enter Captcha" className="input input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button disabled={disabled} className="btn btn-primary">Login</button>
                                </div>
                            </form>
                            <p className='text-center font-bold'>Do Not have an Account ? <Link to="/signup" className='text-blue-600 underline'>Please Sign Up</Link></p>
                            <SocialLogin />
                        </div>
                    </div>
                </div>
            </div >
        </>

    );
};

export default Login;