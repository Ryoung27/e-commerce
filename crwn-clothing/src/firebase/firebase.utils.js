import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAZRbdFWEgFKrOZaDkjBVVu5AAfOmgXXQo",
    authDomain: "crwn-db-eaa24.firebaseapp.com",
    projectId: "crwn-db-eaa24",
    storageBucket: "crwn-db-eaa24.appspot.com",
    messagingSenderId: "470856120920",
    appId: "1:470856120920:web:36e68468dfd405a50ae82d"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;