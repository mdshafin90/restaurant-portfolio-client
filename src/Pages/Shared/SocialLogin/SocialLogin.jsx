import { useContext } from 'react';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('http://localhost:5000/users', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        navigate(from, { replace: true });
                    })
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="divider mx-auto">or Sign In With</div>
            <div className='flex w-[250px] mx-auto justify-evenly pb-5'>
                <div className='cursor-pointer'>
                    <FaFacebook className='h-[30px] w-[30px]' />
                </div>
                <div onClick={handleGoogleLogin} className='cursor-pointer'>
                    <FcGoogle className='h-[30px] w-[30px]' />
                </div>
                <div className='cursor-pointer'>
                    <FaGithub className='h-[30px] w-[30px]' />
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;