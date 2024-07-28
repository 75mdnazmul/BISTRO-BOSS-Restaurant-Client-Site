import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ManProfileLogo from "../../../assets/Logo/Man-Profile.jpg";
import WomanProfileLogo from "../../../assets/Logo/Woman-Profile.jpg";
import { FaBars, FaTimes, FaAngleRight, FaUserAlt, FaCog, FaQuestion, FaSignOutAlt } from "react-icons/fa";
import "./Navber.css";
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';

// for is NavLinks Active
const getNavLinkClass = ({ isActive }) => (isActive ? "active" : "");

const Navber = () => {
    const { user, logOut, gender } = useContext(AuthContext);
    const [isMobile, setIsMobile] = useState(false);
    
    // Profile Sub menu Open and Close by photo
    const [isProfileShow, setIsProfileShow] = useState(false);
    const profilePicRef = useRef(null);
    const subMenuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                profilePicRef.current &&
                subMenuRef.current &&
                !profilePicRef.current.contains(event.target) &&
                !subMenuRef.current.contains(event.target)
            ) {
                setIsProfileShow(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [profilePicRef, subMenuRef]);

    const handleProfileClick = () => {
        if (user) {
            setIsProfileShow(!isProfileShow);
        } else {
            Swal.fire({
                title: "Please Login Or Sign Up",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = '/login';
                }
            });
        }
    };

    // navber show and hide smoothly by scrolling.=======================
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    // Logout
    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "Do you want to be logged out?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log Out"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(() => { })
                    .catch(error => console.log(error))
                Swal.fire({
                    title: "You are successfully Log Out",
                    icon: "success"
                });
            }
        });

    }

    return (
        <div className="navber fixed top-0 w-full z-50" style={{ top: visible ? "0" : "-68px", transition: "top 0.5s ease"}}>
            <div className='nav-container flex justify-between items-center px-10 bg-[#000000bb]'>
                <Link to='/' className='logo text-center py-3 text-white cursor-pointer hover:text-[yellow]'>
                    <h3>BISTRO BOSS</h3>
                    <p>Restaurant</p>
                </Link>
                <div className="navlinks flex justify-center items-center gap-x-1">
                    <ul className={`flex lg:justify-center items-center gap-x-1 ${isMobile ? "active" : ""}`} >
                        <li>
                            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard" className={getNavLinkClass}>Dashboard</NavLink>
                        </li>
                        <li>
                            <NavLink to="/menu" className={getNavLinkClass}>Our Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/salad" className={getNavLinkClass}>Order Now</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" className={getNavLinkClass}>Contact Us</NavLink>
                        </li>
                    </ul>
                    <div className="flex justify-center items-center gap-x-1">
                        {
                            user ? " " : <NavLink to="login">
                                <button className='signIn-btn bg-[#1F2937] rounded-md ms-2'>Sign In</button>
                            </NavLink>
                        }
                        <div className='profile-Pic ms-3 cursor-pointer' title={user ? user.displayName : 'My Profile'} ref={profilePicRef} onClick={handleProfileClick}>
                            <img src={user && user.photoURL ? user.photoURL : user ? (gender == "female" ? WomanProfileLogo : ManProfileLogo) : ManProfileLogo} alt="Profile Photo" />
                        </div>
                        <div className='menu ms-3' onClick={() => setIsMobile(!isMobile)}>
                            {isMobile ? (<FaTimes title='Close' />) : (<FaBars title='Menu' />)}
                        </div>
                        {/* Profile Sub menu */}
                        {
                            user ? <div ref={subMenuRef} className={`sub-menu-wrap ${isProfileShow ? "active" : ""}`}>
                                <div className="sub-menu">
                                    <div className="user-info">
                                        <div className='user-pic'>
                                            <img src={user && user.photoURL ? user.photoURL : user ? (gender == "female" ? WomanProfileLogo : ManProfileLogo) : ManProfileLogo} className='w-52 h-52' alt="Profile Photo" />
                                        </div>
                                        <h2>{user ? (user.displayName) : "User Name"}</h2>
                                    </div>
                                    <hr />
                                    <div className='sub-menu-option'>
                                        <a href="#" className='sub-menu-link'>
                                            <i><div><FaUserAlt className='pro-icon' /></div></i>
                                            <p>Edit Profile</p>
                                            <span><FaAngleRight /></span>
                                        </a>
                                        <a href="#" className='sub-menu-link'>
                                            <i><div><FaCog /></div></i>
                                            <p>Setting & Privacy</p>
                                            <span><FaAngleRight /></span>
                                        </a>
                                        <a href="#" className='sub-menu-link'>
                                            <i><div><FaQuestion /></div></i>
                                            <p>Help & Support</p>
                                            <span><FaAngleRight /></span>
                                        </a>
                                        <div onClick={handleLogOut} className='sub-menu-link'>
                                            <i><div><FaSignOutAlt /></div></i>
                                            <p>Logout</p>
                                            <span><FaAngleRight /></span>
                                        </div>
                                    </div>
                                </div>
                            </div> : ""
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navber;
