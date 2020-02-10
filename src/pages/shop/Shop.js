import React,{useState,useEffect} from 'react';
import SHOP_DATA from './shopData';
import PreviewCollection from '../../component/preview-collection/PreviewCollection'

const Shop = () =>{
        
    const initialValue ={
        collections: SHOP_DATA
    }

    const [collection,setCollection] = useState(initialValue);

    const {collections} = collection; // destructure state from collection === collection.collection

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