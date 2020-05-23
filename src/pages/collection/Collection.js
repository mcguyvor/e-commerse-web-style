import React from 'react';
import {useSelector} from 'react-redux';
import CollectionItem from '../../component/collection-item/CollectionItem';
import './collection.scss';

//import CollectionItem from '../../component/collection-item';

const CollectionPage = ({match}) =>{

    const shopItems = useSelector(state => state.shop);
    //const collection = shopItems.collections.filter(idx => idx.routeName === match.params.collectionId);
    const collection = shopItems.collections[match.params.collectionId];
    console.log('collection', collection)
    const {title,items} = collection;
    return(
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item =><CollectionItem key={item.id} item={item}/>)}
            </div>
        </div>
    )

}

export default CollectionPage;