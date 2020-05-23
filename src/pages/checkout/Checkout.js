import React from 'react';

import './checkout-style.scss';

import {useSelector} from 'react-redux';

import CheckoutItem from '../../component/checkout-item/CheckoutItem';

const Checkout = () =>{


    const cartItems = useSelector(state=> state.cart.cartItems);
    
    const total = cartItems =>
          cartItems.reduce(
            (accumalatedQuantity, cartItem) =>
              accumalatedQuantity + cartItem.quantity * cartItem.price,
            0
          );

        return(
            <div className='checkout-page'>
                <div className='checkout-header'>
                    <div className='header-block'>
                    <span>Product</span>
                    </div>
                    <div className='header-block'>
                    <span>Description</span>
                    </div>
                    <div className='header-block'>
                    <span>Quantity</span>
                    </div>
                    <div className='header-block'>
                    <span>Price</span>
                    </div>
                    <div className='header-block'>
                    <span>Remove</span>
                    </div>
                </div>
               {cartItems.map(cartItem=> (
                 <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
               ))}

                <div className='total'>
                    <span>TOTAL : B{total(cartItems)}</span>
                </div>
            </div>
        )
}
export default Checkout;