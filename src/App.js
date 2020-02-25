import React,{useState,useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import {Route,Switch} from 'react-router-dom';
import Header from './component/header/Header';
import SignInSignUp from './pages/sign-in-and-sign-up/Sign-in-Sign-up';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';

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
      //return unsubscribeFromAuth();
  }
  ,[])

  return (
    
      <div>
        <Header />
        <Switch>

          <Route exact path='/' component={HomePage}/>
          
          <Route exact path='/shop' component={ShopPage}/>

          <Route exact path='/signin' component={SignInSignUp}/>
       
        </Switch>
      
      </div>

  );
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
