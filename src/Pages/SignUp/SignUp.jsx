import { FaFacebook, FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import loginImg from '../../assets/loginImage/login.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";


const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        console.log("user profile data updated")
                        reset();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'User Created Successfully',
                            timer: 1500
                        })
                        navigate("/")
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <Helmet>
                <title>Happy Grill | Sign Up</title>
            </Helmet>
            <div className="my-10">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center lg:text-left">
                            <p className='text-center text-4xl font-extrabold mb-4'>Sign Up !!!</p>
                            <img src={loginImg} alt="" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Name</span>
                                    </label>
                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                    <p className="mt-2">
                                        {errors.name && <span className=" text-red-600 font-bold">Name is Required</span>}
                                    </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your PhotoURL</span>
                                    </label>
                                    <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" />
                                    <p className="mt-2">
                                        {errors.photoURL && <span className=" text-red-600 font-bold">Photo URL is Required</span>}
                                    </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Your Email</span>
                                    </label>
                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="Email" className="input input-bordered" />
                                    <p className="mt-2">
                                        {errors.name && <span className=" text-red-600 font-bold">Email is Required</span>}
                                    </p>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Create Password</span>
                                    </label>
                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name='password' placeholder="Password" className="input input-bordered" />
                                    <p className="mt-2">
                                        {errors.password?.type === "required" && (
                                            <p className="text-red-600 font-bold">Password is Required</p>
                                        )}
                                    </p>
                                    <p className="mt-2">
                                        {errors.password?.type === "minLength" && (
                                            <p className="text-red-600 font-bold">Password must be 6 Characters</p>
                                        )}
                                    </p>
                                    <p className="mt-2">
                                        {errors.password?.type === "maxLength" && (
                                            <p className="text-red-600 font-bold">Password must be less than 20 Characters</p>
                                        )}
                                    </p>
                                    <p className="mt-2">
                                        {errors.password?.type === "pattern" && (
                                            <p className="text-red-600 font-bold">Password must have one Uppercase [A-Z], one Lowercase [a-z], one Number [0-9], & one Special Character [!@#$&*]</p>
                                        )}
                                    </p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <p className='text-center font-bold'>Already have an Account ? <Link to="/login" className='text-blue-600 underline'>Please Login</Link></p>
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
                <Link to="/" className='text-blue-700 underline'>Back To Home</Link>
            </div >
        </>
    );
};

export default SignUp;