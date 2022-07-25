import React from 'react';
import "./stripe-button.scss";

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LPWHtJPZUxYO6eaJhXo9U7l6yps0qFf7h8kJvfYehaE4BaF8bqB18ubok389c9NbfDXvnfTf0LwF7PDyta5mjLx00Y05rAKjZ';

    const onToken = token =>{
        console.log(token);
        alert("Payment Successful")
    }

    return ( 
        <StripeCheckout 
            label='Pay Now'
            name='Crown Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your Total is $ $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
     );
}
 
export default StripeCheckoutButton;