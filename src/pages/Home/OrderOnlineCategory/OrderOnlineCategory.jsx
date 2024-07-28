import "./OrderOnlineCategory.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import bgImg from '../../../assets/home/chef-service.webp'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import img1 from "../../../assets/home/slide1.webp"
import img2 from "../../../assets/home/slide2.webp"
import img3 from "../../../assets/home/slide3.webp"
import img4 from "../../../assets/home/slide4.webp"
import img5 from "../../../assets/home/slide5.webp"
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { useState, useEffect } from "react";
import Cover from "../../Shared/Cover/Cover";

const OrderOnlineCategory = () => {
    const [slidesPerView, setSlidesPerView] = useState(4); // Initial slides per view

    useEffect(() => {
      const handleResize = () => {
        // Adjust slides per view based on screen width
        if (window.innerWidth <= 600) {
          setSlidesPerView(1);
        } else if (window.innerWidth <= 767) {
          setSlidesPerView(2);
        } else if (window.innerWidth <= 991) {
          setSlidesPerView(3);
        } else {
          setSlidesPerView(4);
        }
      };
  
      handleResize(); // Call once to set initial slides per view
  
      window.addEventListener('resize', handleResize); // Listen for resize events
      return () => {
        window.removeEventListener('resize', handleResize); // Remove event listener on component unmount
      };
    }, []);
    return (
        <>
            <SectionTitle
                subHeading={"---From 11:00am to 10:00pm---"}
                heading={"ORDER ONLINE"}
            ></SectionTitle>
            <Swiper
                slidesPerView={slidesPerView}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={img1} alt="Slide Image 1" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 mb-10 text-slate-900">Salads</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Slide Image 2" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-200">Pizzas</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Slide Image 3" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Soups</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Slide Image 4" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Desserts</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Slide Image 5" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Salads</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="Slide Image 6" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Desserts</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Slide Image 7" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-200">Pizzas</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="Slide Image 8" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Soups</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="Slide Image 7" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-200">Pizzas</h3> */}
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="Slide Image 10" />
                    {/* <h3 className="text-3xl font-bold uppercase -mt-16 ms-20 text-slate-900">Salads</h3> */}
                </SwiperSlide>
            </Swiper>
            <Cover img={bgImg} height="500px" backgroundColor='#fff' title="Bistro Boss" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo." contentColor='#000' textFontFamily="Inter, sans-serif" textSize='18px' titleSize="50px" margin='0px 200px' cls></Cover>
        </>
    );
};

export default OrderOnlineCategory;