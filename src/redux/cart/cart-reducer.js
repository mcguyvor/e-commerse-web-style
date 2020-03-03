import CartActionType from './cart-type';

import {addItemToCart} from './cart-utils';

const {TOGGLE_CART_HIDDEN,ADD_ITEM} = CartActionType

const initialValue = {
    hidden:true,
    cartItems:[]
};

const cartReducer = (state=initialValue, action)=>{
    switch (action.type){
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case ADD_ITEM:
            return{ 
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
            }
        default :
        return state;
    }
}

export default cartReducer;