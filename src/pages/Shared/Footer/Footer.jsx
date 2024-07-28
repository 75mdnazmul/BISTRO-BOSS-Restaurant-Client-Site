import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="text-white flex">
        <div className="text-center bg-[#1F2937] w-[50%] flex justify-end py-10 pe-4 sm:pe-4 md:pe-20 lg:pe-24 xl:pe-24">
          <div>
            <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl pb-5 font-semibold">Contact Us</h3>
            <div className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl">
              <p>123 ABS Street, Uni 21, Bangladesh</p>
              <p>+88 123456789</p>
              <p>Mon - Fri: 08:00 - 22:00</p>
              <p>Sat - Sun: 10:00 - 23:00</p>
            </div>
          </div>
        </div>
        <div className="bg-[#111827] w-[50%] flex justify-start py-10 ps-10 sm:ps-10 md:ps-20 lg:ps-24 xl:ps-24">
          <div className="text-center">
            <h3 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl pb-5 font-semibold">Follow US</h3>
            <p className="text-lg sm:text-lg md:text-lg lg:text-xl xl:text-xl">Join us on social media</p>
            <div className="flex justify-evenly pt-5 text-3xl ">
              <i className="cursor-pointer hover:text-[#EEFF25] transition duration-300"> <FaFacebookF /></i>
              <i className="cursor-pointer hover:text-[#EEFF25] transition duration-300"> <FaInstagram /></i>
              <i className="cursor-pointer hover:text-[#EEFF25] transition duration-300"> <FaTwitter /></i>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center bg-[#000] py-5 text-white">
        <p className="text-lg">Copyright © CulinaryCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
