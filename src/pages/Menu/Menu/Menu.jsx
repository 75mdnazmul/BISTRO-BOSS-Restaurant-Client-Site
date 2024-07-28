
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import bannerImg from '../../../assets/menu/banner.webp'
import contentImg from '../../../assets/home/chef-service.webp'
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import MenuCategory from '../../Shared/MenuCategory/MenuCategory';
import { useEffect } from 'react';

const Menu = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    const [menu, loading] = useMenu();
    if (loading) {
        return <div className="flex items-center justify-center h-[100vh]">
            <span className="loading loading-spinner w-[50px] text-warning"></span>
        </div>;
    }

    // Filter pizza and salad etc items
    const popular = menu.filter(item => item.category === 'popular');
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    const drinks = menu.filter(item => item.category === 'drinks');

    return (
        <div className='bg-slate-50'>
            <Helmet>
                <title>Menu | BISTRO BOSS Restaurant</title>
            </Helmet>
            <Cover img={bannerImg} height="600px" backgroundColor='rgba(21,21,21,0.7)' title="Our menu" text="WOULD YOU LIKE TO TRY A DISH ?" contentColor="#fff" textSize='20px' titleSize="60px" margin='150px'></Cover>
            {/* TODAY'S OFFER */}
            <SectionTitle
                subHeading={"---Don't miss---"}
                heading={"TODAY'S OFFER"}
            ></SectionTitle>

            <MenuCategory items={popular} title='salad'></MenuCategory>

            {/* Desserts */}
            <Cover className='mt-20' img={contentImg} height="500px" backgroundColor='rgba(21,21,21,0.7)' title="Desserts" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." contentColor="#fff" textFontFamily="Inter, sans-serif" textSize='16px' titleSize="34px" margin='200px'></Cover>

            <MenuCategory items={dessert} title='dessert'></MenuCategory>

            {/* Pizza */}
            <Cover className='mt-20' img={contentImg} height="500px" backgroundColor='rgba(21,21,21,0.7)' title="Pizza" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." contentColor="#fff" textFontFamily="Inter, sans-serif" textSize='16px' titleSize="34px" margin='200px'></Cover>

            <MenuCategory items={pizza} title='pizza'></MenuCategory>

            {/* Salads */}
            <Cover className='mt-20' img={contentImg} height="500px" backgroundColor='rgba(21,21,21,0.7)' title="Salads" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." contentColor="#fff" textFontFamily="Inter, sans-serif" textSize='16px' titleSize="34px" margin='200px'></Cover>

            <MenuCategory items={salad} title='salad'></MenuCategory>

            {/* Soups */}
            <Cover className='mt-20' img={contentImg} height="500px" backgroundColor='rgba(21,21,21,0.7)' title="Soups" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." contentColor="#fff" textFontFamily="Inter, sans-serif" textSize='16px' titleSize="34px" margin='200px'></Cover>

            <MenuCategory items={soup} title='soup'></MenuCategory>

            {/* Soups */}
            <Cover className='mt-20' img={contentImg} height="500px" backgroundColor='rgba(21,21,21,0.7)' title="Drinks" text="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." contentColor="#fff" textFontFamily="Inter, sans-serif" textSize='16px' titleSize="34px" margin='200px'></Cover>

            <MenuCategory items={drinks} title='drinks'></MenuCategory>

        </div >
    );
};

export default Menu;