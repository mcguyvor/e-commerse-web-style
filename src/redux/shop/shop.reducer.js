import SHOP_DATA from '../../pages/shop/shopData';
import ShopActionTypes from './shop.types';

const INITIAL_STATE = {
    collections : SHOP_DATA,
    isFetching: false,
    errorMessage: undefined
}

  const shopReducer = (state = INITIAL_STATE , action ) => {
      
        switch(action.type){
            case ShopActionTypes.FETCH_COLLECTIONS_START:
                return {
                    ...state,
                     isFetching : true
                }

            case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS: 
                return {
                    ...state,
                    isFetching : false,
                    collections : action.payload
                }

            case ShopActionTypes.FETCH_COLLETIONS_FAILURE:
                return {
                    ...state,
                    isFetching : false,
                    errorMessage: action.payload
                    

                }

            case ShopActionTypes.UPDATE_COLLECTIONS:
                return {
                    ...state,
                    collections : action.payload
                }
            default:
                return state;
      }
  }
  export default shopReducer;