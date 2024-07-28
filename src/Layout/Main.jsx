import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navber from '../pages/Shared/Navber/Navber';

const Main = () => {
    const location = useLocation();
    const noNavberFooter = location.pathname.includes('login') || location.pathname.includes('signUp');

    return (
        <div>
            {noNavberFooter || <Navber></Navber>}
            <div className='bg-slate-50'>
                <Outlet></Outlet>
            </div>
            {noNavberFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;