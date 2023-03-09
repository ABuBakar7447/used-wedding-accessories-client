import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination } from "swiper";



const AdvertiseCard = ({ product }) => {
    const { img_url, product_name, location, resale_price, yearof_use, purchase_year, post_date, condition, product_status } = product
    return (
        <div>
            <div className="card card-compact h-[500px]  bg-base-100 shadow-xl mx-auto w-3/4 my-10">
                <figure><img src={img_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-[#749383] text-3xl"> <span className='text-[#cea274]'>{product_name}</span></h2>
                    <h3 className='font-bold text-[#749383]'>Product Location: <span className='text-black'>{location}</span></h3>

                    <h3 className='font-bold text-[#749383]'>Condition: <span className='text-black'>{condition}</span></h3>

                    <h3 className='font-bold text-[#749383]'>Product Status: <span className='text-black'>{product_status}</span></h3>
                    <h3 className='font-bold text-[#749383]'>Current Price: <span className='text-black'>${resale_price}</span></h3>

                    <h3 className='font-bold text-[#749383]'>Offer: <span className='text-[#cea274]'>20% off</span></h3>



                </div>
            </div>

            

        </div>
    );
};

export default AdvertiseCard;