import CartActionType from './cart-type';

import {addItemToCart} from './cart-utils';

const {TOGGLE_CART_HIDDEN,ADD_ITEM,CLEAR_ITEM_FROM_CART} = CartActionType

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
            };
        case CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter(item => item.id!=action.payload.id)
            };
        default :
        return state;
    }
}

export default cartReducer;