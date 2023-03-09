import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({data}) => {
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    

    const stripe = useStripe();
    const elements = useElements();

    const { _id, product_img, name, email, productname, resaleprice, phone, location } = data
    console.log(resaleprice)



    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("http://localhost:5000/create-payment-intent", {
    //       method: "POST",
    //       headers: { 
    //         "Content-Type": "application/json",
    //         // authorization: `bearer ${localStorage.getItem('tokenForAccess')}`
            
        
    //     },
    //       body: JSON.stringify({ resaleprice }),
    //     })
    //       .then((res) => res.json())
    //       .then((data) => setClientSecret(data.clientSecret));
    //   }, [resaleprice]);

     

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }



    }

    // useEffect(() => {
    //     // Create PaymentIntent as soon as the page loads
    //     fetch("http://localhost:5000/create-payment-intent", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             authorization: `bearer ${localStorage.getItem('tokenForAccess')}`
    //         },
    //         body: JSON.stringify({ resaleprice }),
    //     })
    //         .then((res) => res.json())
    //         .then((data) => setClientSecret(data.clientSecret));
    // }, [resaleprice]);




    return (
        <>
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button
                className='btn btn-sm mt-4 btn-primary'
                type="submit"
                disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
        <p className="text-red-500">{cardError}</p>
        
    </>
    );
};

export default CheckoutForm;