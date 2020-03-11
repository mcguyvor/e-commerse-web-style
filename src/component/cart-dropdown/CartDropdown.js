import React from 'react';

import CustomButton from '../custom-button/CustomButton';

import './cart-dropdown.scss';

import CartItem from '../cart-item/CartItem';

import { useSelector, useDispatch } from 'react-redux';

import { selectCartItems } from '../../redux/cart/cart-selector';

import { withRouter} from 'react-router-dom';

import { toggleCartHidden } from '../../redux/cart/cart-action'

const CartDropdown = ({history}) =>{


        const cartItems = useSelector(selectCartItems);
        
        const dispatch = useDispatch();
        

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
                        
                        <CustomButton onClick ={()=> {
                                history.push('checkout');
                                dispatch(toggleCartHidden())
                                }}>GO TO CHECKOUT</CustomButton>

                </div>
            );
}




export default withRouter(CartDropdown);