import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../../AuthProvider/AuthProvider';



const AddProduct = () => {
    const { user } = useContext(AuthContext)


    const { register, handleSubmit, formState: { errors } } = useForm();

    const imgbb = process.env.REACT_APP_imgbb_key;
    console.log(imgbb)    

    const navigate = useNavigate();


    //seller product adding part 

    const handleProduct = data => {
        const image = data.image[0];
        console.log(image)
        const formData = new FormData();
        formData.append('image', image);

        // const url = `https://api.imgbb.com/1/upload?key=${imgbb}`
        // https://api.imgbb.com/1/upload?key=88882a9f6de260a88ee37edc5bcc355e

        fetch(`https://api.imgbb.com/1/upload?key=${imgbb}`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const product = {

                        img_url: imgData.data.url,
                        product_category: data.category,
                        product_name: data.pro_name,
                        location: data.location,
                        resale_price: data.resale,
                        original_price: data.original,
                        yearof_use: data.usetime,
                        purchase_year: data.buytime,
                        post_date: data.postingdate,
                        condition: data.condition,
                        seller_name: user.displayName,
                        seller_email: user.email,
                        seller_number: data.number,
                        description: data.description,
                        product_status: 'Available'

                    }
                    console.log(product)


                    fetch('http://localhost:5000/products', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);

                            navigate('/dashboard/myproduct')


                        })
                }
            })
    }

    const notify = () => {
        toast("Product added successfully")


    };



    return (
        <div>
            <div className='my-10 w-3/4 mx-auto'>
                <h2 className="text-4xl text-center">Add Your Product</h2>
                <div className='flex justify-center'>
                    <form onSubmit={handleSubmit(handleProduct)}>

                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Photo</span></label>
                            <input type="file" {...register("image", {
                                required: "Photo is Required"
                            })} className="input input-bordered w-full" />
                            {errors.img && <p className='text-red-600'>{errors.img.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Product Name</span></label>
                            <input type="text" {...register("pro_name", {
                                required: "Product Name is Required"
                            })} className="input input-bordered w-full" />
                            {errors.pro_name && <p className='text-red-600'>{errors.pro_name.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Product Location</span></label>
                            <input type="text" {...register("location", {
                                required: "Product Location is Required"
                            })} className="input input-bordered w-full" />
                            {errors.pro_loc && <p className='text-red-600'>{errors.pro_loc.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Enter Resale Price</span></label>
                            <input type="text" {...register("resale", {
                                required: "Resale price is Required"
                            })} className="input input-bordered w-full" />
                            {errors.re_sale && <p className='text-red-600'>{errors.re_sale.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Enter Original Price</span></label>
                            <input type="text" {...register("original", {
                                required: "Original price is Required"
                            })} className="input input-bordered w-full" />
                            {errors.original && <p className='text-red-600'>{errors.original.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Usage time(month or year)</span></label>
                            <input type="text" {...register("usetime", {
                                required: "Uses time is Required"
                            })} className="input input-bordered w-full" />
                            {errors.use && <p className='text-red-600'>{errors.use.message}</p>}
                        </div>

                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Product Buying Time(dd/mm/yy)</span></label>
                            <input type="text" {...register("buytime", {
                                required: "Purchase date is Required"
                            })} className="input input-bordered w-full" />
                            {errors.date && <p className='text-red-600'>{errors.date.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Your posting date (dd/mm/yy)</span></label>
                            <input type="text" {...register("postingdate", {
                                required: "Posting time is Required"
                            })} className="input input-bordered w-full" />
                            {errors.post && <p className='text-red-600'>{errors.post.message}</p>}
                        </div>



                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Product Condition</span></label>
                            <select
                                {...register('condition')}
                                className="select input-bordered w-full">
                                <option value='Excellent'>Excellent</option>
                                <option value='Good'>Good</option>
                                <option value='Fair'>Fair</option>


                            </select>
                        </div>



                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Enter Mobile Number</span></label>
                            <input type="text" {...register("number", {
                                required: "Number is Required"
                            })} className="input input-bordered w-full" />
                            {errors.num && <p className='text-red-600'>{errors.num.message}</p>}
                        </div>


                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Category</span></label>
                            <select
                                {...register('category')}
                                className="select input-bordered w-full">
                                <option value='Ladies Collection'>Ladies Collection</option>
                                <option value='Males Collection'>Males Collection</option>
                                <option value='Shoes'>Shoes</option>


                            </select>
                        </div>

                        <div className="form-control w-full">
                            <label className="label"> <span className="label-text">Product Description</span></label>
                            <input type="text" {...register("description", {
                                required: "Description is Required"
                            })} className="input input-bordered w-full p-10" />
                            {errors.des && <p className='text-red-600'>{errors.des.message}</p>}
                        </div>

                        <input onClick={notify} className='btn btn-primary w-full mt-4' value="Add Product" type="submit" />
                        <ToastContainer />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;