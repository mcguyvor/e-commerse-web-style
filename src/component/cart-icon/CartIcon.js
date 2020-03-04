import React from 'react';

import{connect,useSelector} from 'react-redux';

import {ReactComponent as ShoppingIcon} from '../../assets/cart.svg';

import {toggleCartHidden} from '../../redux/cart/cart-action';

import { selectCartItemsCount} from '../../redux/cart/cart-selector';

import './cart-icon.scss';

const CartIcon = ({toggleCartHidden}) =>{
    
    const itemCount = useSelector(state=>({
        itemCount : selectCartItemsCount(state)
        
    }));
    console.log(itemCount);

    return(
    <div className='cart-icon' onClick={()=>toggleCartHidden()}>
            <ShoppingIcon className='shopping-icon'/>
<span className='item-count'>{itemCount.itemCount}</span>
    </div>
    )
    }

const mapDispatchToProps = dispatch =>({
    toggleCartHidden : ()=> dispatch(toggleCartHidden())
});
export default connect(null,mapDispatchToProps)(CartIcon);