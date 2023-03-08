import React from 'react';
import { FaTrash } from 'react-icons/fa';

const MyProductCard = ({ sellerProduct, handleDelete, advertiseHandle }) => {

    const { img_url, product_name, location, resale_price, original_price, post_date, seller_name, product_status, _id } = sellerProduct
    return (
        <div>
            <div className="card card-compact  bg-base-100 shadow-xl mx-auto w-3/4 my-10">
                <figure><img src={img_url} alt="Shoes" className='h-[400px] w-3/4' /></figure>
                <div className="card-body">

                    <h2 className=" my-5 text-center text-2xl font-serif font-bold text-[#cea274]">{product_name}</h2>

                    <h3 className='font-bold font-serif text-[#749383]'>Seller Name: <span className=' text-black'> {seller_name}</span> </h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Location:<span className='text-black'> {location}</span></h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Resale Price:<span className='text-black'> ${resale_price}</span></h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Original Price:<span className='text-black'> ${original_price}</span> </h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Post Date:<span className='text-black'> {post_date}</span></h3>

                    <h3 className='font-bold font-serif text-[#749383]'>Product Status:<span className='text-black'> {product_status}</span></h3>

                    <div className=' md:flex lg:flex-row flex-col m-5 justify-center'>


                        <button onClick={() => advertiseHandle(_id)} className="m-2 btn border-0 bg-[#cea274] hover:bg-[#749383] font-bold">Advertise Product</button>

                        <div className='m-2 btn border-0 bg-[#cea274] hover:bg-[#749383] font-bold'
                            onClick={() => handleDelete(_id)}
                        ><span>Delete  Product</span><span className='p-1.5 pl-1'><FaTrash></FaTrash></span></div>





                    </div>




                </div>
            </div>
        </div>
    );
};

export default MyProductCard;