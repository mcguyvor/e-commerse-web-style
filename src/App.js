import React,{useState,useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import {Route,Switch,Redirect} from 'react-router-dom';

import Header from './component/header/Header';
import SignInSignUp from './pages/sign-in-and-sign-up/Sign-in-Sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import CheckoutPage from './pages/checkout/Checkout';
import Checkout from './pages/checkout/Checkout';


function App(props) {


  let unsubscribeFromAuth = null;

  const {setCurrentUser} = props;

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
    unsubscribeFromAuth=  auth.onAuthStateChanged( async userAuth=>{
       if(userAuth){
          const userRef= await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot =>{

            console.log('snapShot',snapShot);

            props.setCurrentUser({         
                id:snapShot.id,
                ...snapShot.data()
            })
          })
       }else{
         setCurrentUser({userAuth});
       } 
      //setCurrentUser({currentUser:user})
      //  console.log(user)
      //  createUserProfileDocument(user);
      })
  }
  ,[])

  return (
    
      <div>
        <Header />
        <Switch>

          <Route exact path='/' component={HomePage}/>
          
          <Route  path='/shop' component={ShopPage}/>

          <Route exact path='/signin' render={()=>props.currentUser ? (<Redirect to='/'/>) : (<SignInSignUp/>)}/>
       
          <Route exact path='/checkout' component={Checkout}/>
          
        </Switch>
      
      </div>

  );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
