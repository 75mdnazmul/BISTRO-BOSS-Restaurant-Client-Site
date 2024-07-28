import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaLinkedin, FaEye, FaEyeSlash } from "react-icons/fa";
import img from "../../assets/others/login.webp";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

// for is NavLinks Active
const getNavLinkClass = ({ isActive }) => (isActive ? "active" : "");

const Login = () => {
    const [eyeOpen, setEyeOpen] = useState(false);
    const captchaRef = useRef(null);
    const [disable, setDisable] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { logIn } = useContext(AuthContext)

    // Simple React Captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    };

    // Password Show or close
    const handleEyeToggle = () => {
        setEyeOpen(!eyeOpen);
    };

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Welcome!",
                    text: "You are successfully logged in",
                    showConfirmButton: false,
                    timer: 2500
                });

                // Clear the form fields after successful login
                form.reset();
                navigate(from, { replace: true });
            })
            .catch((error) => {
                let errorMessage = "";
                if (error.code === "auth/invalid-credential") {
                    errorMessage = "User not found - invalid-credential";
                }
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Login failed",
                    text: errorMessage,
                    showConfirmButton: true
                });
            });
    };

    return (
        <div className='flex items-center justify-center h-auto py-10 bg-white gap-16'>
            <Helmet>
                <title>Login | BISTRO BOSS Restaurant</title>
            </Helmet>
            <div className='w-[600px] hidden sm:hidden md:hidden lg:block xl:block'>
                <img src={img} alt="Login image" />
            </div>
            <div className='bg-slate-200 px-14 py-8 rounded-3xl'>
                <h1 className='text-center text-4xl font-bold' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>Login Form</h1>
                <div className='buttons flex justify-center gap-2'>
                    <NavLink to='/login' className={`${getNavLinkClass} w-36 bg-[#ff0000] text-white text-center text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] border-2 border-[#ff0000]`} style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}> Login </NavLink>

                    <NavLink to='/signUp' className='w-36 bg-[#FF0000] text-white text-center text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}> Sign Up </NavLink>
                </div>
                <form onSubmit={handleLogin}>
                    <label htmlFor='email' className='text-xl font-semibold cursor-pointer'> Email </label><br />
                    <input name='email' type='email' placeholder="Type your email" className="text-lg py-2 px-5 mt-2 mb-2 w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" required id='email' />
                    <br />
                    <label htmlFor='password' className='text-xl font-semibold cursor-pointer'> Password </label>
                    <br />
                    <div className='relative'>
                        <input name='password' type={(eyeOpen === false) ? 'password' : 'text'} placeholder="Type your password" className="text-lg py-2 px-5 mt-3 mb-1 w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" required id='password' /><br />
                        <i onClick={handleEyeToggle} className='absolute top-6 text-2xl right-5 cursor-pointer text-gray-500'>{
                            ((eyeOpen === false) ? <FaEye /> : <FaEyeSlash />)
                        }</i>
                    </div>
                    <div className='text-[#ff0000] text-md text-right font-semibold hover:text-[#000] cursor-pointer'>Forgot password ?</div>

                    {/* Captcha added */}
                    <label htmlFor='captcha' className='text-lg font-semibold'> <LoadCanvasTemplate /></label>
                    <input ref={captchaRef} name='captcha' type='text' placeholder="Type the captcha above here" className="text-lg py-2 px-5 my-3 w-60 border-2 border-[#e2e2e2] rounded-md" required id='captcha' />
                    <button type='button' onClick={handleValidateCaptcha} className='w-32 rounded-md ml-3 text-white font-semibold text-md py-3 bg-blue-700 hover:bg-blue-500 active:bg-[#087f0c] active:text-white '>Validate Captcha</button>
                    <br />
                    <div className='flex justify-center'>
                        <input disabled={disable} value='Login' type="submit" className={`${!disable ? ' hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white border-2 border-[#ff0000] cursor-pointer' : 'opacity-50 cursor-not-allowed'} w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-6 rounded-md`} style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}></input>
                    </div>
                </form>
                <div className='text-center'>
                    <h2 className='pt-3 font-semibold'><span className='text-lg font-bold'>Or</span> Login with</h2>
                    <div className='flex justify-center pt-3 text-4xl gap-5'>
                        <i className='cursor-pointer'><FcGoogle /></i>
                        <i className='cursor-pointer text-[#0865ff]'><FaFacebook /></i>
                        <i className='cursor-pointer text-blue-800'><FaLinkedin /></i>
                    </div>
                    <p className='pt-3 mb-0 text-lg font-semibold'>Don&apos;t have an account ? Then <Link to="/signUp" className='underline font-bold text-[16px]  text-blue-600 hover:text-[#ff0000]'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
