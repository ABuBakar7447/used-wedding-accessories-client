import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({singleBrand}) => {
    const {category_name,img_url,total_sell}=singleBrand
    console.log(img_url)
    return (
        <div>
            <div className="card hover:bg-[#749383] w-80 lg:w-96 mx-auto bg-base-100 shadow-xl">
                <figure className="lg:px-2 px-0 pt-2 pb-10">
                    <img src={img_url} alt="Shoes" className="rounded-xl bg-black h-64 lg:w-full w-80" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category_name}</h2>
                    <p>Total sell : {total_sell}</p>
                    <div className="card-actions">
                        <Link to={`/products/${category_name}`}><button className="btn border border-white bg-[#cea274]">Buy Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;