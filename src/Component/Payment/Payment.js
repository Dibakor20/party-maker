import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CardForm from './CardForm';


const stripePromise = loadStripe('pk_test_51Ie10JJSnyGT61SilNG3WaqgLnLifJ3z2w5caZStnyeivblIohodNv8w6i0tAe92msCEjpBBTBOtswsisx5QHV1o00igRrbwlt');

const Payment = ({handlePayment}) => {
    return (
        <>
          <Elements stripe={stripePromise}>
           <CardForm handlePayment={handlePayment}/>
            </Elements>  
        </>
    );
};

export default Payment;