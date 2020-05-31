import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckOutButton = ({ price }) =>{

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_0sBryasbUiNYKfKUyQHvAWFn00wJl46ZRx';
    const onToken = token =>{
        console.log('payment success')
    }
    return (
        <StripeCheckout
            label = 'Pay Now'
            name = 'E Commerse'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            currency = 'THB'
            description = {`Your total is ${price}`}
            amount = { priceForStripe }
            panelLabel = 'Pay now'
            token = {onToken}
            stripeKey = { publishableKey }
        />
    )
}
export default StripeCheckOutButton;