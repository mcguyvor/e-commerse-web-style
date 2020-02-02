import React , {useState,useEffect} from 'react';
import './Directory.scss';
import MenuItem from '../menu-item/MenuItem';
const Directory = () =>{
    
    const initialValue = {
        
        sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl:'hats'
            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl:'hats'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl:'hats'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl:'hats'
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl:'hats'
            }
          ]
    }

    const [directoryItem,setDirectoryItem] = useState(initialValue);

    return(

        <div className='directory-menu'>
            {
                directoryItem.sections.map(({id , ...props}) => (
                    <MenuItem key={id} {...props}/>

                ))
            }
        </div>
    )
}
export default Directory; 