import CartActionType from './cart-type';

const {TOGGLE_CART_HIDDEN} = CartActionType

const initialValue = {
    hidden:true
};

const cartReducer = (state=initialValue, action)=>{
    switch (action.type){
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default :
        return state;
    }
}

export default cartReducer;