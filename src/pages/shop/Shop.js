import React,{useState,useEffect} from 'react';
import SHOP_DATA from './shopData';
import PreviewCollection from '../../component/preview-collection/PreviewCollection'
import { useSelector } from 'react-redux';

const Shop = () =>{   

    const shopItems = useSelector(state => state.shop);

    const {collections} = shopItems; // destructure state from collection === collection.collection


    return(
        
            <div className='shop-page'>
                {
                    collections.map(({id,...props})=>(
                        
                        <PreviewCollection key={id} {...props}/>
                    
                        ))
                }
            </div>


    )

}
export default Shop;