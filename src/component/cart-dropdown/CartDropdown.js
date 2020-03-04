import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './cart-dropdown.scss';

import CartItem from '../cart-item/CartItem';

import {useDispatch, useSelector} from 'react-redux';


const CartDropdown = () =>{

        const dispatch = useDispatch();

        const cartItems = useSelector(state=> state.cart.cartItems);

        return (

                <div className='cart-dropdown'>
            
                        <div className='cart-items'>
                        {
                                cartItems.map(cartItem =>
                                        <CartItem key={cartItem.id} item ={cartItem}/>
                                        )
                        }
                        </div>
                        
                        <CustomButton>GO TO CHECKOUT</CustomButton>

                </div>
            );
}




export default CartDropdown;