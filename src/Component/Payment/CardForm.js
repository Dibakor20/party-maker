import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CardForm = ({handlePayment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError,setPaymentError] = useState(null)
    const [paymentSuccess,setPaymentSuccess] = useState(null)

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const cardElement = elements.getElement(CardElement);

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess("")
        } else {
            setPaymentSuccess(paymentMethod.id);
            setPaymentError("")
            handlePayment(paymentMethod.id)
        }
    };
    return (
        <>
          <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className="btn btn-success mt-5 px-5" type="submit" disabled={!stripe}>
                    Pay
              </button>
            </form>
            {
                paymentError && <p style={{color:"red"}} className="mt-5">{paymentError}</p>
            }
             {
                paymentSuccess && <p style={{color:"green"}} className="mt-5">Your Payment is successFull</p>
            }
        </div>  
        </>
    );
};

export default CardForm;