import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Context/UserContext';
import { userInfoSave } from '../../API/Users';
import Loading from '../Loading/Loading';


const Login = () => {
    const { register, formState: { errors }, handleSubmit, getValues } = useForm();
    const { signIn, googleLogin, forgetPassword } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const [email, setEmail] = useState(null);

    const [loading, setLoading] = useState(false);


    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();


    // user login-------------------
    const handleLogin = data => {
        setLoading(true);
        setLoginError('');
        signIn(data.email, data.password)
            .then(Result => {
                const user = Result.user;
                console.log(user);
                toast.success('Login Successfully!');

                // set for user token------------- 
                if (user?.email) {
                    fetch(`https://e-commerce-project-server.vercel.app/jwt?email=${user?.email}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log("get token");
                            if (data.accessToken) {
                                localStorage.setItem('commerceToken', data.accessToken)
                                setLoading(false)
                                navigate(from, { replace: true })
                            }
                        })
                }



            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message)
                setLoading(false);
            })

    };



    // google login----------------
    const handleGoogleLogin = () => {
        setLoading(true);
        googleLogin()
            .then(result => {
                const user = result.user;
                console.log(user);
                // user data save --------------
                userInfoSave(user?.displayName, user?.email);
                toast.success('Google Login Successfully!');

                // set for user token------------- 
                if (user?.email) {
                    fetch(`https://e-commerce-project-server.vercel.app/jwt?email=${user?.email}`)
                        .then(res => res.json())
                        .then(data => {
                            console.log("get token");
                            if (data.accessToken) {
                                localStorage.setItem('commerceToken', data.accessToken)
                                setLoading(false)
                                navigate(from, { replace: true })
                            }
                        })
                }


            })
            .catch(err => console.log(err))
    }


    // password reset-----------------
    const handlePasswordReset = () => {
        if (email === null) {
            return toast('Please enter your email');
        }
        forgetPassword(email)
            .then(() => {
                toast.success('Please check your email for reset password');
            })
            .catch(err => console.log(err))
    };


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='h-[800px] flex justify-center items-center '>
            <div className='w-96 p-7 shadow-xl mx-2'>
                <h2 className='text-4xl py-4 text-center text-blue-600 font-bold'>Login</h2>
                <p><small>Admin Email:</small> <strong className='ml-2 md:ml-6'> majarul@gmail.com</strong></p>
                <p><small>Password:</small> <strong className='ml-7 md:ml-10'> sayemA1!</strong></p>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Email</span>
                        </label>
                        <input type="email"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            onBlur={() => {
                                const emailValue = getValues('email');
                                setEmail(emailValue);
                            }}
                            className="input input-bordered w-full max-w-xs" placeholder="Your email" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text ">Password</span>
                        </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" placeholder="********" />

                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}

                        <label className="label">
                            <span onClick={handlePasswordReset}
                                className="label-text  hover:underline">Forget Password?</span>
                        </label>
                    </div>

                    <input className='mt-3 btn border-none hover:bg-blue-700  bg-orange-400 text-white w-full max-w-xs' type="submit" value='LogIn' />
                    <div>
                        {
                            loginError && <p className='text-red-600'>{loginError}</p>
                        }
                    </div>
                </form>
                <p className='my-2 '>Don't have an account? <Link to='/register' className='text-primary underline'>Create an account</Link></p>
                <div className='divider py-4'>OR</div>
                <button onClick={handleGoogleLogin}
                    className='btn btn-outline w-full  hover:text-white hover:border-none hover:bg-blue-700 '>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;