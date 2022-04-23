// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyARfpZyx5MRXExt2s0SoXZmvcRPVd8dlu0",
    authDomain: "clone-6ff2f.firebaseapp.com",
    projectId: "clone-6ff2f",
    storageBucket: "clone-6ff2f.appspot.com",
    messagingSenderId: "812656842268",
    appId: "1:812656842268:web:3d9d695cbca04e832db1d9",
    measurementId: "G-WBLY4MTQ6H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};

