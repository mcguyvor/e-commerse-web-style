import React from 'react';

import './cart-item.scss';

const CartItem = ({item :{imageUrl,price,name, quantity }})=>{
    return(
        <div className='cart-item'>
            <img src={imageUrl} alt='alt'/>
            <div className='item-details'>
                <span className='name'>{name}</span>
                <span className='price'>
                    {quantity} x B{price}
                    </span>
            </div>
        </div>
    )
}
export default CartItem;