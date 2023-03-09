import { useQuery } from '@tanstack/react-query';
import React from 'react';
import AdvertiseCard from './AdvertiseCard';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination } from "swiper";


const AdvertiseProduct = () => {

    const { data: advertised = [] } = useQuery({
        queryKey: ['advertised'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/advertised');
            const data = await res.json();
            return data;
        }
    });


    return (
        <>
            {
                advertised.length && <h1 className='text-5xl mt-24 font-serif font-bold text-[#749383] text-center'>Sell Offer</h1>
            }
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <div>

                    {
                        advertised.length && advertised.map(product =><SwiperSlide>
                            <AdvertiseCard
                                key={product._id}
                                product={product}
                            ></AdvertiseCard>
                        </SwiperSlide> )
                    }

                </div>
                

            </Swiper>
        </>


    );
};
export default AdvertiseProduct;