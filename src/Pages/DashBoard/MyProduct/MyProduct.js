import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import MyProductCard from './MyProductCard';

const MyProduct = () => {
    const { user } = useContext(AuthContext);


    

    const { data: productDetails = [], refetch } = useQuery({
        queryKey: ['product'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/product?seller_email=${user?.email}`, {

                headers: {
                    authorization: `bearer ${localStorage.getItem('tokenForAccess')}`

                }
            });
            const data = await res.json();
            return data;
        }
    })





    const handleDelete = id => {
        const proceed = window.confirm('Do you want to remove your product?');
        if (proceed) {
            fetch(`http://localhost:5000/delproduct/${id}`, {
                method: 'Delete'
            })

                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('your product deleted successfully')

                        refetch()
                    }
                })
        }
    }



    const advertiseHandle = id => {
        fetch(`http://localhost:5000/newrole/${id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {

                }
            })
    }

    return (
        <div>
            <div>
            {
                productDetails.length > 0 ?
                    <h2 className='text-center text-[#749383] text-3xl font-serif font-bold my-5'>Your Have Added  <span className=' font-sans'>{productDetails.length}</span> Products</h2>
                    :
                    <h2 className='text-center text-[#749383] text-2xl font-bold my-10'>No Products Booked</h2>
            }
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto my-5 '>
                {
                    productDetails?.length > 0 && productDetails.map(sellerProduct => <MyProductCard key={sellerProduct._id}
                        sellerProduct={sellerProduct}
                        handleDelete={handleDelete}
                        advertiseHandle={advertiseHandle}
                    ></MyProductCard>
                    )
                }
            </div>
        </div>
        </div>
    );
};

export default MyProduct;