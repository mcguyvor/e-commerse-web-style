import React , {useState, useEffect} from 'react';
import PreviewCollection from '../../component/preview-collection/PreviewCollection'
import { useSelector, useDispatch } from 'react-redux';
import './shop.scss';
import { Route } from 'react-router-dom';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import {updateCollections} from '../../redux/shop/shop.actions';
import WithSpinner from '../../component/with-spinner/with-spinner.component';
import CollectionPage from '../collection/Collection';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const CollectionOverviewWithSpinner = WithSpinner(PreviewCollection); 
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const Shop = ({match,props}) =>{    

    const shopItems = useSelector(state => state.shop);

    const dispatch = useDispatch();

    const [isLoading,setIsLoading] = useState(true);

    const collections = Object.keys(shopItems.collections).map(key => shopItems.collections[key]);

    let unsubscribeFromSnapShot = null;

    const [isCollectionFetching,setIsCollectionFetching] = useState(useSelector(state => state.isFetching));

    useEffect(()=>{
        // const collectionRef = firestore.collection('collections');
        // unsubscribeFromSnapShot = collectionRef.get().then(async snapshot => {
        //     const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
        //     dispatch(updateCollections(collectionsMap));
        //     setIsLoading(false);
        // })
        dispatch(fetchCollectionsStartAsync());  
    },[isCollectionFetching]);

    return(
        
            <div className='shop-page'>
                <h1>shop</h1>
                {isCollectionFetching ? 
                <CollectionOverviewWithSpinner isLoading={isCollectionFetching} {...props}/>
                :
                <div className='collections-overview'>
                    {collections.map(({ id, title, items, ...props})=> <PreviewCollection key={id} title={title} items={items} {...props}/>)}
                </div>}
               <Route path={`${match.path}/:collectionId`} render={props => <CollectionPageWithSpinner isLoading={isCollectionFetching} {...props }/>}/>
            </div>


    )

}
export default Shop;