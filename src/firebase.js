// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from 'firebase'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA82HzqI-AYo2ePNsiv5BvmjgNVTuTelzs",
    authDomain: "frontend-abate.firebaseapp.com",
    projectId: "frontend-abate",
    storageBucket: "frontend-abate.appspot.com",
    messagingSenderId: "1063211083661",
    appId: "1:1063211083661:web:ef79284d1b93a58c38ffc4",
    measurementId: "G-F82NFLKRCG"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
