import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';

const Categories = () => {
    const { data: category = [] } = useQuery({
        queryKey: ['catagory'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/catagory');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            <div className='my-16'>
                <h1 className='text-5xl my-5 text-[#749383] font-extrabold font-serif text-center'>Our Products</h1>
                <h2 className='text-[#cea274] text-xl font-serif text-center'>Hope you will find the best products for you.</h2>


                <div >

                    <div className='w-11/12 grid gap-6 gird-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto my-5 '>
                        {
                            category.map(singleBrand => <CategoryCard
                                key={singleBrand._id}
                                singleBrand={singleBrand}
                            ></CategoryCard>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Categories;