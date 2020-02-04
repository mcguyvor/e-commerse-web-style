import React from 'react';
import './MenuItem.scss';
import {withRouter} from 'react-router-dom';


const MenuItem = ({title,imageUrl,size,linkUrl,history,match}) =>{
 
    return(
        <div 
            className={`${size} menu-item`} 
            onClick={()=> history.push(`${match.url}${linkUrl}`)}
        >
        
            <div 
            className='background-image'
            style={{backgroundImage:`url(${imageUrl})`}}> 

                <div className='content'>

                    <h1 className='title'>{title.toUpperCase() }</h1>
                    {console.log('url',`url('${imageUrl}')`)}
                    <span className='subtitle'>Shop NOW</span>

                </div>
        
            </div>

        </div>
    )
}
export default withRouter(MenuItem);