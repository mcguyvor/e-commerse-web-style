import React , {useState,useEffect} from 'react';

import './Directory.scss';

import MenuItem from '../menu-item/MenuItem';

import { useSelector } from 'react-redux';


const Directory = () =>{

    const directoryItem = useSelector( state => state.directory);

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