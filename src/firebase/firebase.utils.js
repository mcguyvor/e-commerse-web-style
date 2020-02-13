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

    firebase.initializeApp(config);

    export const auth = firebase.auth();
    export const firestore = firebase.firestore();

    const provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({prompt:'select_account'});
    export const signInWithGoogle =()=>auth.signInWithPopup(provider);
    
    export default firebase;