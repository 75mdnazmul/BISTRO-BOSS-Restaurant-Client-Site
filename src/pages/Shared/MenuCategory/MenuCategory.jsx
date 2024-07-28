import React from 'react';
import { Link } from 'react-router-dom';
import MoreItemButton from '../MoreItemButton/MoreItemButton';
import MenuItems from '../MenuItems/MenuItems';

const MenuCategory = ({ items, title }) => {
    return (
        <div className="flex justify-center ">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 max-w-[480px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg pb-12 sm:pb-12 md:pb-20 lg:pb-18 xl:pb-18 ">
                    {
                        items.map(item => <MenuItems
                            key={item._id}
                            item={item}
                        ></MenuItems>)
                    }
                </div>
                <Link to={`/order/${title}`} className='mt-10'>
                    <MoreItemButton name='ORDER YOUR FAVOURITE FOOD' />
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;