import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const config = {
        apiKey: "AIzaSyBbVR7rudqsaV0spCmM_S_W0YlA3bA0ECU",
        authDomain: "crown-db-a4e72.firebaseapp.com",
        databaseURL: "https://crown-db-a4e72.firebaseio.com",
        projectId: "crown-db-a4e72",
        storageBucket: "crown-db-a4e72.appspot.com",
        messagingSenderId: "361811741747",
        appId: "1:361811741747:web:4ba8a4ff7bfbeb8740e746",
        measurementId: "G-4QCDF4GK2G"
      };

export const createUserProfileDocument = async (userAuth, additionalData) =>{

    if(!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    
    const snapShot = await userRef.get();

    if(!snapShot.exists){

      const {displayName,email} = userAuth;
      const createdAt = new Date();

      try{

        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });

      }catch(error){

        console.log('error creating user',error.message);
      
      }
    }

    return userRef;
}
   
    export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
      const collectionRef = firestore.collection(collectionKey);

      const arrOfObjectToAdd = Object.values(objectsToAdd.collections);
      const batch = firestore.batch();
       
      arrOfObjectToAdd.forEach(({title, items}) =>{
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, {title, items});
      })
      
      return await batch.commit();
    }


    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt:'select_account'});
    export const signInWithGoogle =()=>auth.signInWithPopup(provider);
    
    export default firebase;