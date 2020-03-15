import React from 'react';

import './checkout-item.scss';

import { clearItemFromCart } from '../../redux/cart/cart-action';

import { useDispatch } from 'react-redux';

const CheckoutItem = ({cartItem}) =>{
    
    const dispatch = useDispatch();

    const {name, imageUrl, price, quantity} = cartItem;
    return(

        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>{quantity}</span>
            <span className='price'>{price}</span>
            <span className='remove-button' onClick ={()=> dispatch(clearItemFromCart(cartItem))}> X </span>

        </div>
    )
}
export default CheckoutItem;