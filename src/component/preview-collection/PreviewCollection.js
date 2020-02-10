import React from 'react';
import './PreviewStyle.scss';
import CollectionItem from '../collection-item/CollectionItem';
const PreviewCollection = ({title, items}) =>(

    <div className='collection-preview'>
        
        <h1 className='title'>{title.toUpperCase()}</h1>
        
        <div className='preview'>
            {
                items
                .filter((item,idx)=> idx<4)
                .map(({id,...props})=>(

                    <CollectionItem key={id} {...props}/>
                            
                    ))
            }


        </div>

    </div>
)


    



export default PreviewCollection;