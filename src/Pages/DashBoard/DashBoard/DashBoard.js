import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, } from "swiper";

import pic1 from '../../../Picture/dresses-for-men-1-.jpeg'
import pic2 from '../../../Picture/red shari.avif'
import pic3 from '../../../Picture/shoes-for-a-groom.jpg'

const DashBoard = () => {
    return (
        <div>
            <div className="">
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
                            <div className='h-[600px] imgGradien rounded-xl'>
                                <img src={pic1} alt="" className='w-full h-full rounded' />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='h-[600px] imgGradient rounded-xl'>
                                <img src={pic2} alt="" className='w-full h-full rounded' />
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='h-[600px] imgGradient rounded-xl'>
                                <img src={pic3} alt="" className='w-full h-full rounded' />
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
        </div>
    );
};

export default DashBoard;