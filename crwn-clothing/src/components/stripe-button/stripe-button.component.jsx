import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JymWOLMo7W9B8IxJkS0leaKnXr3ysZGtRBf4tmAzv2dcdM5PWCCdbWSSr0j7wjapTvOah3W34FnmJQCyDEnaj1Z00hmpCM6L4'

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful');
    }
    return(
        <StripeCheckout
        label='Pay Now'
        name='CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}>

        </StripeCheckout>
    );
};

export default StripeCheckoutButton