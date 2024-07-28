import { useState, useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import SectionTitle from '../../Component/SectionTitle/SectionTitle';
import bannerImg from '../../assets/contact/banner.webp'
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
    // recaptach function 
    const [verified, setVerified] = useState(false)
    function onChange(value) {
        console.log("Captcha value:", value);
        setVerified(true)
    }
    // stay on page top
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className='bg-slate-50'>
            <Helmet>
                <title>Contact | BISTRO BOSS Restaurant</title>
            </Helmet>
            <Cover img={bannerImg} height="600px" backgroundColor='rgba(21,21,21,0.7)' title="Contact Us" text="WOULD YOU LIKE TO MEET US ?" contentColor="#fff" textSize='20px' titleSize="60px" margin='150px'></Cover>
            {/* Our Location =================================*/}
            <SectionTitle
                subHeading={"---Visit Us---"}
                heading={"Our Location"}
            ></SectionTitle>
            <div className='max-w-screen-xl lg:max-w-screen-xl xl:max-w-screen-lg mx-auto pb-32'>
                <div className='text-center grid grid-cols-3 gap-10 pb-5'>
                    <div>
                        <div className='bg-[#D1A054] py-5 px-10 text-white text-2xl flex justify-center items-center'><FaPhoneAlt /></div>
                        <div className=' border border-t-0 border-x-2 border-b-2'>
                            <div className='pt-10 bg-slate-200 h-40 mx-6 mb-6 '>
                                <div className='pb-2 font-bold text-xl uppercase'>Phone</div>
                                <div className='font-medium text-[17px]'>9878879</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#D1A054] py-5 px-10 text-white text-2xl flex justify-center items-center'><FaMapMarkerAlt /></div>
                        <div className='border border-t-0 border-x-2 border-b-2'>
                            <div className='pt-10 bg-slate-200 h-40 mx-6 mb-6 '>
                                <div className='pb-2 font-bold text-xl uppercase'>Address</div>
                                <div className='font-medium text-[17px]'>9878879</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='bg-[#D1A054] py-5 px-10 text-white text-2xl flex justify-center items-center'><FaClock /></div>
                        <div className='border border-t-0 border-x-2 border-b-2'>
                            <div className='pt-10 bg-slate-200 h-40 mx-6 mb-6 '>
                                <div className='pb-2 font-bold text-xl uppercase'>WORKING HOURS</div>
                                <div className='font-medium text-[17px]'>Mon - Fri: 08:00 - 22:00</div>
                                <div className='font-medium text-[17px]'>Sat - Sun: 10:00 - 23:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* CONTACT FORM =================================*/}
                <SectionTitle
                    subHeading={"---Send Us a Message---"}
                    heading={'CONTACT FORM'}
                ></SectionTitle>
                <div className='bg-slate-200 pt-16 pb-10 px-20'>
                    <div className='grid grid-cols-2 gap-7'>
                        <div>
                            <h3 className='text-lg font-bold'>Name*</h3>
                            <input className='py-3 text-lg px-5 mt-2 mb-6 w-full rounded-lg' placeholder='Enter your name' type="text" />
                        </div>
                        <div>
                            <h3 className='text-lg font-bold'>Email*</h3>
                            <input className='py-3 text-lg px-5 mt-2 mb-6 w-full rounded-lg' placeholder='Enter your email' type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='text-lg font-bold'>Phone*</h3>
                            <input className='py-3 text-lg px-5 mt-2 mb-6 w-full rounded-lg' placeholder='Enter your phone number' type="text" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='text-lg font-bold'>Message*</h3>
                            <textarea className='py-3 text-lg px-5 mt-2 mb-6 w-full h-40 rounded-lg' placeholder='Write your message here' name="" id=""></textarea>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                    <ReCAPTCHA
                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        onChange={onChange}
                    />
                        <div className={`py-4 px-5 bg-gradient-to-r from-[#835D23] to-[#e8a943] ${verified ? 'hover:from-yellow-400 hover:to-red-600 cursor-pointer' : 'opacity-50 cursor-not-allowed'} w-44 flex justify-center rounded-lg font-bold mt-10`}>
                            <button className='text-white' disabled={!verified}>Send message</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;