import { Link } from 'react-router-dom';
import loginImg from '../../assets/loginImage/login.png'
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import Swal from 'sweetalert2';

const Login = () => {
    const [disabled, setDisabled] = useState(true)
    const captchaRef = useRef(null)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        console.log(email, password)
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
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
        <div className="my-10">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <p className='text-center text-4xl font-extrabold mb-4'>Please Login !!!</p>
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
                                <input type="text" ref={captchaRef} name='captcha' placeholder="Enter Captcha" className="input input-bordered" required />
                                <button onClick={handleValidateCaptcha} className='btn btn-outline btn-xs mt-5'>Validate Captcha</button>
                            </div>
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className='text-center font-bold'>Do Not have an Account ? <Link to="/register" className='text-blue-600 underline'>Please Register</Link></p>
                        <div className="divider mx-auto">or Sign In With</div>
                        <div className='flex w-[250px] mx-auto justify-evenly pb-5'>
                            <div className='cursor-pointer'>
                                <FaFacebook className='h-[30px] w-[30px]' />
                            </div>
                            <div className='cursor-pointer'>
                                <FcGoogle className='h-[30px] w-[30px]' />
                            </div>
                            <div className='cursor-pointer'>
                                <FaGithub className='h-[30px] w-[30px]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Login;