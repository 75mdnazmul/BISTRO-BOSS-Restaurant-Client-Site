import React from 'react';
import Banner from '../Banner/Banner';
import OrderOnlineCategory from '../OrderOnlineCategory/OrderOnlineCategory';
import FromOurMenu from '../FromOurMenu/FromOurMenu';
import CallUs from '../CallUs/CallUs';
import ChefRecommends from '../ChefRecommends/ChefRecommends';
import FeaturedManu from '../FeaturedManu/FeaturedManu';
import Testimonials from '../Testimonials/Testimonials';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home | BISTRO BOSS Restaurant</title>
            </Helmet>
            <Banner />
            <OrderOnlineCategory />
            <FromOurMenu />
            <CallUs />
            <ChefRecommends className='max-w-screen-xl lg:max-w-screen-xl xl:max-w-screen-xl mx-auto' />
            <FeaturedManu />
            <Testimonials />
        </div>
    );
};

export default Home;