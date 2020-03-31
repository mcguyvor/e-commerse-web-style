import React from 'react';

import './collection-overview.scss';

import { useSelector} from 'react-redux';

import PreviewCollection from '../preview-collection/PreviewCollection';

const CollectionOverview = () =>{

    const shopItems = useSelector(state => state.shop);

    const {collections} = shopItems;

    return(
        <div className='collections-overview'>
            {
                    collections.map(({id,...props})=>(
                        
                        <PreviewCollection key={id} {...props}/>
                    
                        ))
                }
        </div>
    );
}

export default CollectionOverview;