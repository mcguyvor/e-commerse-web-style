import React from 'react';
import PreviewCollection from '../../component/preview-collection/PreviewCollection'
import { useSelector } from 'react-redux';
import './shop.scss';
import { Route } from 'react-router-dom';

import CollectionPage from '../collection/Collection';

const Shop = ({match}) =>{   

    const shopItems = useSelector(state => state.shop);

    const collections = Object.keys(shopItems.collections).map(key => shopItems.collections[key]);

    return(
        
            <div className='shop-page'>
                <h1>shop</h1>
                <div className='collections-overview'>
                    {collections.map(({ id, title, items, ...props})=> <PreviewCollection key={id} title={title} items={items} {...props}/>)}
                </div>
               <Route path={`${match.path}/:collectionId`} component={CollectionPage} />

            </div>


    )

}
export default Shop;