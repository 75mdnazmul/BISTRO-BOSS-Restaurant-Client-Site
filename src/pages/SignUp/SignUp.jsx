import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import img from "../../assets/others/register.webp";
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from "react-hook-form"
import { FaArrowUp } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
import Swal from 'sweetalert2';

const SignUp = () => {
    // Password Show Hide Toggle handle
    const [open, setOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [filePhoto, setFilePhoto] = useState(null)
    const profilePhoto = filePhoto && URL.createObjectURL(filePhoto)

    const { createUser, updateUserProfile, userGender } = useContext(AuthContext);

    const { register, handleSubmit, reset, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        if (data.password !== data.confirmPassword) {  // Password match validation
            setErrorMessage('Confirm password does not match the password');
            return;
        }
        setErrorMessage('');
        console.log(data);

        userGender(data.gender)

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL || profilePhoto)
                    .then(() => {
                        reset();
                    })
                    .catch((error) => {
                        setErrorMessage(error.message);
                      })
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Welcome!",
                    text: "You are successfully Sign up",
                    showConfirmButton: false,
                    timer: 2500
                });
                navigate('/');
            })
            .catch((error) => {
                let errorMessage = "Sign Up failed";
                if (error.code === "auth/email-already-in-use") {
                    errorMessage = "Email is already in use";
                }
                setErrorMessage(errorMessage);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Sign Up failed",
                    text: errorMessage,
                    showConfirmButton: true
                });
            });
    }


    const handleToggle = () => {
        setOpen(!open);
    }

    const handleConfirmToggle = () => {
        setOpenConfirm(!openConfirm);
    }
    // #######################################################################################

    const handlePhoto = (e) => {
        const file = e.target.files[0];
        setFilePhoto(file)
    }

    return (
        <div className='sm:flex lg:flex xl:flex items-center justify-center h-auto py-10 px-10 bg-white gap-16'>
            <Helmet>
                <title>Sign Up | BISTRO BOSS Restaurant</title>
            </Helmet>
            <div className='w-[600px] hidden sm:hidden md:hidden lg:block xl:block'>
                <img src={img} alt="Sign-Up image" />
            </div>
            <div className='bg-slate-200 px-14 py-8 rounded-3xl'>
                <h1 className='text-center text-4xl font-bold' style={{ fontFamily: "'Hind Siliguri', sans-serif" }}>Sign Up Form</h1>
                <div className='flex justify-center gap-2'>
                    <Link to="/login"><button className='w-36 bg-[#ff0000] text-white text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black focus:text-white hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white focus:bg-[#087f0c] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}>Login</button></Link>
                    <Link to="/signUp"><button className='w-36 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-5 mb-6 rounded-md hover:bg-[#F2EC1A] hover:text-black focus:text-white hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white focus:bg-[#087f0c] border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}>Sign Up</button></Link>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label htmlFor='name' className='text-lg font-semibold '> Name *</label><br />
                    <input name='name' type='text' {...register("name", { required: true })} placeholder="Type your name" className="text-lg py-2 px-5 mt-2 mb-2 w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" id='name' />
                    <div className='pb-2 gap-2 text-red-500 font-semibold'>
                        {errors.name?.type === 'required' && <span className='flex'>Name is required &nbsp;<FaArrowUp /></span>}
                    </div>
                    <div>
                        <label htmlFor='Profile_Photo' className='text-lg font-semibold '> Profile Photo </label><br />
                        <div className='flex items-center'>
                            <input type='url' {...register("photoURL")} placeholder="Enter your photo URL Link" className="text-lg py-2 px-2 mt-2 mb-2  border-2 border-[#e2e2e2] rounded-md " id='Profile_Photo' title='Enter your photo URL Link' />
                            <h2 className='px-2 text-lg font-bold'>Or</h2>
                                <input
                                    className='w-[100px] font-bold '
                                    type='file'
                                    id='photo'
                                    {...register("photo")}
                                    onChange={handlePhoto}
                                    accept='image/*'
                                />
                        </div>
                    </div>


                    {/* <label htmlFor="gender" className="text-lg font-semibold">
                        Gender Selection * :
                    </label> */}
                    <div className='flex justify-center text-lg font-bold py-2'>
                        <div className='pe-6'>
                            <input className='me-3 scale-150 cursor-pointer' {...register("gender", { required: true })} id="male" name="gender" type="radio" value="male" />
                            <label className='cursor-pointer' htmlFor="male">Male</label>
                        </div>
                        <div className='pe-6'>
                            <input className='me-3 scale-150 cursor-pointer' {...register("gender", { required: true })} id="female" name="gender" type="radio" value="female" />
                            <label className='cursor-pointer' htmlFor="female">Female</label>
                        </div>
                        <div>
                            <input className='me-3 scale-150 cursor-pointer' {...register("gender", { required: true })} id="other" name="gender" type="radio" value="other" />
                            <label className='cursor-pointer' htmlFor="other">Other</label>
                        </div>
                    </div>
                    <div className='text-center pt-2'>
                        {errors.gender && <span className='text-red-500 font-semibold'>Gender is required</span>}
                    </div>

                    <label htmlFor='email' className='text-lg font-semibold'> Email *</label><br />
                    <input name='email' {...register("email", { required: true })} type='email' placeholder="Type your email" className="text-lg py-2 px-5 mt-2 mb-2 w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" id='email' />
                    <div className='pb-2 gap-2 text-red-500 font-semibold'>
                        {errors.email && <span className='flex'>Email is required &nbsp;<FaArrowUp /></span>}

                    </div>
                    <label htmlFor='password' className='my-5 text-lg font-semibold '> Password *</label>
                    <div className='relative'>
                        <input name='password' {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*].*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder="Type your password" className="text-lg py-2 px-5 mt-3 mb-1 w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 font-semibold border-2 border-[#e2e2e2] rounded-md " id='password' type={(open === false) ? 'password' : 'text'} />
                        <i onClick={handleToggle} className='absolute top-6 text-2xl right-5 cursor-pointer text-gray-500'>{
                            (open === false) ? <FaEye /> : <FaEyeSlash />
                        }</i>
                    </div>
                    {/* Password Validation */}
                    <div className='pb-2 gap-2 text-red-500 font-semibold w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96'>
                        {errors.password?.type === "required" && <span className='flex'>Password is required &nbsp;<FaArrowUp /></span>}
                        {errors.password?.type === "minLength" && <span className='flex'>Password must be 6 characters &nbsp;<FaArrowUp /></span>}
                        {errors.password?.type === "maxLength" && <span className='flex'>Password must be less than 20 characters &nbsp;<FaArrowUp /></span>}
                        {errors.password?.type === "pattern" && <span>Password must be one uppercase, one lowercase, one number and two strong character.</span>}
                    </div>
                    <label htmlFor='confirmPassword' className='my-5 text-lg font-semibold '> Confirm password *</label>
                    <div className='relative'>
                        <input name='confirmPassword' {...register("confirmPassword", { required: true })} placeholder="Type password again" className="text-lg py-2 px-5 mt-3 mb-1 w-80 sm:w-96 md:w-96 lg:w-96 xl:w-96 font-semibold border-2 border-[#e2e2e2] rounded-md" id='confirmPassword' type={(openConfirm === false) ? 'password' : 'text'} />
                        <i onClick={handleConfirmToggle} className='absolute top-6 text-2xl right-5 cursor-pointer text-gray-600'>{
                            (openConfirm === false) ? <FaEye /> : <FaEyeSlash />
                        }</i>
                    </div>
                    <div className='pb-2 gap-2 text-red-500 font-semibold'>
                        {errors.confirmPassword && <span className='flex'>Confirm Password is required &nbsp; <FaArrowUp /></span>}
                    </div>
                    {errorMessage && <p className="text-red-500 text-[16px] text-center font-bold mt-2">{errorMessage}</p>} {/* Display error message */}

                    <div className='flex justify-center'>
                        <button type="submit" className='w-96 bg-[#FF0000] text-white text-[22px] font-semibold py-1 px-6 mt-6 rounded-md hover:bg-[#F2EC1A] hover:text-black hover:border-2 hover:border-[#ff0000] active:bg-[#087f0c] active:text-white border-2 border-[#ff0000]' style={{ fontFamily: "'Hind Siliguri', sans-serif", boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset", transition: '.2s' }}>Sign Up</button>
                    </div>
                </form>
                <p className='pt-5 text-lg text-center font-semibold'>Already have an account ? Then <Link to="/login" className='underline font-bold text-[16px] text-blue-600 hover:text-[#ff0000]'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;
