import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import {Route,Switch} from 'react-router-dom';
import Header from './component/header/Header';
import SignInSignUp from './pages/sign-in-and-sign-up/Sign-in-Sign-up';


function App() {
  return (
    
      <div>
        <Header/>
        <Switch>

          <Route exact path='/' component={HomePage}/>
          
          <Route exact path='/shop' component={ShopPage}/>

          <Route exact path='/signin' component={SignInSignUp}/>
       
        </Switch>
      
      </div>

  );
}

export default App;
