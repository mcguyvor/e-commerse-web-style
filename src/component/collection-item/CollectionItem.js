import React from 'react';

import CustomButtom from '../custom-button/CustomButton';

import './collection-item.scss';

import {useSelector, useDispatch} from 'react-redux';

import {addItem} from '../../redux/cart/cart-action';

const CollectionItem = ({item}) =>{

        const {imageUrl,name,price} = item;

        const dispatch = useDispatch();

        return(    
            <div className='collection-item'>
                
                <div className='image' 
                style={{
                    backgroundImage:`url(${imageUrl})`
                }}
                />            
                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                    <span className='price'>{price}</span>
                </div>
                <CustomButtom onClick={()=>dispatch(addItem(item))} inverted>
                    Add to cart
                </CustomButtom>
            </div>
        )
    }
export default CollectionItem;