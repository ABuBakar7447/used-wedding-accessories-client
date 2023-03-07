import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './ProductCard';
import ProductModal from './ProductModal';

const CategoryProduct = () => {
    const productdetails = useLoaderData();

    const [modalData, setModalData] = useState('')
    return (
        <div>
            <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-1 lg:grid-cols-1 mx-auto my-5 '>
                {
                    productdetails.map(viewProduct => <ProductCard
                        key={viewProduct._id}

                        viewProduct={viewProduct}
                        setModalData={setModalData}
                    
                    ></ProductCard>)
                }
            </div>

            <ProductModal
                modalData={modalData}

            ></ProductModal>


        </div>
    );
};

export default CategoryProduct;