import React,{useState,useEffect} from 'react';
import SHOP_DATA from './shopData';
import PreviewCollection from '../../component/preview-collection/PreviewCollection'
import { useSelector } from 'react-redux';
import CollectionOverview from '../../component/collection-overview/CollectionOverview';
import { Route } from 'react-router-dom';

import CategoryPage from '../catgegory/category';

const Shop = ({match}) =>{   

    const shopItems = useSelector(state => state.shop);

    const {collections} = shopItems; // destructure state from collection === collection.collection


    return(
        
            <div className='shop-page'>
               <Route exact path={`${match.patch}`} componenet={CollectionOverview} />
               <Route exact path={`${match.patch}/:categoryId`} component={CategoryPage} />
            </div>


    )

}
export default Shop;