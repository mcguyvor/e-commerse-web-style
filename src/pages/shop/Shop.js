import React,{useState,useEffect} from 'react';
import SHOP_DATA from './shopData';
import PreviewCollection from '../../component/preview-collection/PreviewCollection'
import { useSelector } from 'react-redux';
import CollectionOverview from '../../component/collection-overview/CollectionOverview';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/Collection';

const Shop = ({match}) =>{   

    const shopItems = useSelector(state => state.shop);

    const {collections} = shopItems; // destructure state from collection === collection.collection
    console.log('match path',match.path);
    console.log('collections', shopItems);
    return(
        
            <div className='shop-page'>
               <Route exact path={`${match.path}`} componenet={CollectionOverview} />
               <Route exact path={`${match.path}/:collectionId`} component={CollectionPage} />

            </div>


    )

}
export default Shop;