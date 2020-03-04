import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './cart-dropdown.scss';

import CartItem from '../cart-item/CartItem';

import { useSelector } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart-selector';

import { withRouter} from 'react-router-dom';


const CartDropdown = ({history}) =>{


        const cartItems = useSelector(selectCartItems);
        
        

        return (

                <div className='cart-dropdown'>
            
                        <div className='cart-items'>
                        {
                                cartItems.length ?  

                                cartItems.map(cartItem =>
                                        <CartItem key={cartItem.id} item ={cartItem}/>
                                        )
                                        :
                                        <span className='empty-message'>Your cart is empty</span>
                                        
                        }
                        </div>
                        
                        <CustomButton onClick ={()=> history.push('checkout')}>GO TO CHECKOUT</CustomButton>

                </div>
            );
}




export default withRouter(CartDropdown);