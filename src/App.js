import React,{useEffect, useState} from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/Shop';
import {Route,Switch,Redirect} from 'react-router-dom';

import Header from './component/header/Header';
import SignInSignUp from './pages/sign-in-and-sign-up/Sign-in-Sign-up';
import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
import { selectCurrentUser } from './redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import Checkout from './pages/checkout/Checkout';
import { store} from './redux/store/store';
import {useSelector} from 'react-redux';

function App(props) {


  let unsubscribeFromAuth = null ;

  const {setCurrentUser} = props;
  const collectionsArrays = useSelector(state=>state.shop);

  const [collectionsArray, setCollectionsArray] = useState(collectionsArrays); 
  // const collectionsArray = useSelector(state=>state.shop);

  useEffect(()=>{
    // eslint-disable-next-line react-hooks/exhaustive-deps
     let unsubscribeFromAuth=  auth.onAuthStateChanged( async userAuth=>{
       if(userAuth){
          const userRef= await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot =>{
            props.setCurrentUser({         
                id:snapShot.id,
                ...snapShot.data()
            })
          })
       }else{
         setCurrentUser({userAuth});

         addCollectionAndDocuments('collections', collectionsArray);
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
          
          <Route exact path='/shop' component={ShopPage}/>

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
