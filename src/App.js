import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import {Route,Switch} from 'react-router-dom';

const HatPage = () => (
  <div>
    <h1>Hatts Page</h1>
  </div>
)
 

function App() {
  return (
    
      <div>
        
        <Switch>

          <Route exact path='/' component={HomePage}/>
          
          <Route exact path='/shop' component={ShopPage}/>

       
        </Switch>
      
      </div>

  );
}

export default App;
