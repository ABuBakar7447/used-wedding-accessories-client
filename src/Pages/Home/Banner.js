import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, } from "swiper";

import pic1 from '../../Picture/dresses-for-men-1-.jpeg'
import pic2 from '../../Picture/red shari.avif'
import pic3 from '../../Picture/shoes-for-a-groom.jpg'

import './Banner.css'

const Banner = () => {
    return (
        <div className='mb-16'>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 my-5">

                <div className="... lg:h-[600px] p-16">

                    <div className=''>
                        <p className='my-10 text-[#cea274] text-xl text-start font-serif'>WedRoad Accessories</p>
                        <h1 className='lg:text-6xl text-2xl my-12 text-[#749383] font-extrabold font-serif text-start'>Dream Weddings <br/> Made Simple</h1>
                        <p className='text-start lg:w-[500px] my-10 text-xl text-[#7c7c7c]'>
                        Congratulations,  you’re getting married! This is a time for joy, so definitely take it all in – pop some champagne, get all blissed out on your soon-to-be boo for life.
                        </p>
                    </div>

                </div>












                <div className="... h-[600px] px-10 ">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className='h-[600px] imgGradient'>
                                <img src={pic1} alt="" className='w-full h-full rounded' />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='h-[600px] imgGradient'>
                                <img src={pic2} alt="" className='w-full h-full rounded' />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='h-[600px] imgGradient'>
                                <img src={pic3} alt="" className='w-full h-full rounded' />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
            </div>

        </div>
    );
};

export default Banner;