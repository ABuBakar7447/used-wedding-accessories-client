import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { FaCheckCircle, FaCartPlus } from 'react-icons/fa';

const ProductCard = ({ viewProduct, setModalData }) => {
    const { img_url, product_name, location, resale_price, original_price, uses_time, purchase_year, post_date, condition, seller_name, product_status, seller_email } = viewProduct;
    console.log(seller_email)


    //checking seller status

    const { data: userDetails = [] } = useQuery({

        queryKey: ['sellerdetails', seller_email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/sellerdetails?seller_email=${seller_email}`);
            const data = await res.json();
            return data;
        }
    });
    console.log(userDetails)




    //card data showing
    return (
        <div>



            <div className="card lg:card-side lg:w-3/4 mx-auto lg:h-[550px] bg-base-100 shadow-xl">
                <figure><img src={img_url} alt="Album" className='h-full w-[400px]' /></figure>

                <div className="card-body text-start">
                    <h2 className="card-title my-5 text-2xl font-serif font-bold text-[#cea274]">{product_name}</h2>

                    <h3 className='font-bold font-serif text-[#749383]'>Location:<span className=' text-black'> {location}</span> </h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Resale Price:<span className='text-black'> ${resale_price}</span></h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Original Price:<span className='text-black'> ${original_price}</span></h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Use Duration:<span className='text-black'> {uses_time}</span> </h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Purchase Year:<span className='text-black'> {purchase_year}</span></h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Post Date:<span className='text-black'> {post_date}</span> </h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Condition:<span className='text-black'> {condition}</span> </h3>



                    <h3 className='font-bold font-serif text-[#749383]'>Product Status: <span className='text-black'> {product_status}</span> </h3>


                    <h3 className='font-bold font-serif text-[#749383]'>Seller Name: <span className='text-black'> {seller_name}</span> </h3>


                    {/* seller status showing */}

                    {
                        userDetails.map(check =>
                            <div key={check._id}>{<div className='flex font-bold font-serif text-[#749383]'>Seller Status:
                                <span className='text-black flex'>
                                {check?.verification} {check.verification === 'Verified' && <FaCheckCircle className='mx-2 rounded text-blue-600'></FaCheckCircle>}
                                </span>
                            </div>
                            }
                                {<h3 className='font-bold font-serif text-[#749383]'>Seller Mail:
                                    <span className='text-black'>{check?.email}</span></h3>}</div>
                        )
                    }








                    <div className="card-actions justify-end">


                        <label htmlFor="my-modal-3" className="btn border-0 bg-[#cea274]
                            hover:bg-[#749383] font-bold" onClick={() => setModalData(viewProduct)}  >Order
                            <FaCartPlus className='text-black ml-2'></FaCartPlus></label>


                    </div>
                </div>
            </div>


        </div>
    );
};

export default ProductCard;