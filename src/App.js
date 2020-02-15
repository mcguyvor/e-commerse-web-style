import React,{useState,useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import {Route,Switch} from 'react-router-dom';
import Header from './component/header/Header';
import SignInSignUp from './pages/sign-in-and-sign-up/Sign-in-Sign-up';
import {auth} from './firebase/firebase.utils';

function App() {

  const[currentUser,setCurrentUser]=useState({currentUser:null});

  let unsubscribeFromAuth = null;

  useEffect(()=>{
    unsubscribeFromAuth=  auth.onAuthStateChanged(user=>{
        setCurrentUser({currentUser:user})
        console.log(user)
      })
      //return unsubscribeFromAuth();
  }
  ,[])

  return (
    
      <div>
        <Header currentUser={currentUser}/>
        <Switch>

          <Route exact path='/' component={HomePage}/>
          
          <Route exact path='/shop' component={ShopPage}/>

          <Route exact path='/signin' component={SignInSignUp}/>
       
        </Switch>
      
      </div>

  );
}

export default App;
