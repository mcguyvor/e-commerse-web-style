import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import {Route,Switch} from 'react-router-dom';
import Header from './component/header/Header';


function App() {
  return (
    
      <div>
        <Header/>
        <Switch>

          <Route exact path='/' component={HomePage}/>
          
          <Route exact path='/shop' component={ShopPage}/>

       
        </Switch>
      
      </div>

  );
}

export default App;
