import React from 'react';
import './HomePage.scss';
import Directory from '../../component/directory/Directory';
import { HomePageContainer } from './Homepage.style';

const HomePage = () =>{
    return(
        
        <HomePageContainer>
            <Directory/>
        </HomePageContainer>
    )
}

export default HomePage; 