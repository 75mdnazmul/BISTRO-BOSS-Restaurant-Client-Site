import React, {  useState } from 'react';
import './OrderNow.css';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import bannerImg from '../../../assets/order/banner.webp';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/useMenu';
import OrderTabs from '../OrderTabs/OrderTabs';
import { useParams } from 'react-router-dom';

import Pagination from '../../../Component/Pagination/pagination';

const OrderNow = () => {
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, []);

    // For Foods Pagination
    const [currentPage, setCurrentPage] = useState(1);

    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menu, loading] = useMenu();
    if (loading) {
        return <div className="flex items-center justify-center h-[100vh]">
            <span className="loading loading-spinner w-[50px] text-warning"></span>
        </div>;
    }

    // Filter pizza and salad etc items 
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const soup = menu.filter(item => item.category === 'soup');
    const dessert = menu.filter(item => item.category === 'dessert');
    const drinks = menu.filter(item => item.category === 'drinks');
    // For Foods Pagination
    const lastPostIndex = currentPage * 6;
    const firstPostIndex = lastPostIndex - 6;
    const saladItems = salad.slice(firstPostIndex, lastPostIndex);
    const pizzaItems = pizza.slice(firstPostIndex, lastPostIndex);
    const soupItems = pizza.slice(firstPostIndex, lastPostIndex);
    const dessertItems = dessert.slice(firstPostIndex, lastPostIndex);
    const drinksItems = drinks.slice(firstPostIndex, lastPostIndex);

    return (
        <div className='bg-white'>
            <Helmet>
                <title>Order Now | BISTRO BOSS Restaurant</title>
            </Helmet>

            <Cover className='order' img={bannerImg} height="600px" backgroundColor='rgba(21,21,21,0.7)' title="Order Now" text="WOULD YOU LIKE TO TRY A DISH ?" contentColor="#fff" textSize='20px' titleSize="60px" margin='150px'></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soups</Tab>
                    <Tab>Desserts</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTabs items={saladItems}></OrderTabs>
                    <Pagination
                        totalPosts={salad.length}
                        postsPerPage={6}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={pizzaItems}></OrderTabs>
                    <Pagination
                        totalPosts={pizza.length}
                        postsPerPage={6}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={soupItems}></OrderTabs>
                    <Pagination
                        totalPosts={soup.length}
                        postsPerPage={6}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={dessertItems}></OrderTabs>
                    <Pagination
                        totalPosts={dessert.length}
                        postsPerPage={6}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </TabPanel>
                <TabPanel>
                    <OrderTabs items={drinksItems}></OrderTabs>
                    <Pagination
                        totalPosts={drinks.length}
                        postsPerPage={6}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                    />
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OrderNow;
