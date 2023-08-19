import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyArNBs2orA2uqxmjSf7CEoCYJrcJJSHaTE",
  authDomain: "clone-d2fbc.firebaseapp.com",
  projectId: "clone-d2fbc",
  storageBucket: "clone-d2fbc.appspot.com",
  messagingSenderId: "990587888844",
  appId: "1:990587888844:web:1fd8ef5e7e9b57ec36ce69",
  measurementId: "G-JR9S8FRQRY"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };