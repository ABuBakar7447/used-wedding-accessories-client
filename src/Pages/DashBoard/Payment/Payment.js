import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';



const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise)


const Payment = () => {
    const data = useLoaderData();
    console.log(data)
    const { _id, product_img, name, email, productname, resaleprice, phone, location } = data
    return (
        <div>
            <h1>Hello {name}</h1>
            <h1>You are going to pay ${resaleprice} for product  " {productname} "</h1>
            <h1>Your Product Destination is {location}</h1>

            <div className='w-96 mx-auto my-16'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        data={data}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;