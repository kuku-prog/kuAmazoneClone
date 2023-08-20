import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAE6GIjxnYEFAB5O46pgNdLFfQWzMFixeM",
  authDomain: "fullstack-clone-ea77a.firebaseapp.com",
  projectId: "fullstack-clone-ea77a",
  storageBucket: "fullstack-clone-ea77a.appspot.com",
  messagingSenderId: "422289778647",
  appId: "1:422289778647:web:103f38afd7547aa4104d92"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
