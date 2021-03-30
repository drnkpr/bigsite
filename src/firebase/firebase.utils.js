import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBnnWsynSxDfEF5HsOSG2g1S6ybs1XKfug",
  authDomain: "crwn-db-6391f.firebaseapp.com",
  projectId: "crwn-db-6391f",
  storageBucket: "crwn-db-6391f.appspot.com",
  messagingSenderId: "77228365233",
  appId: "1:77228365233:web:f18a7dfa5ec3b9c6b7d990",
  measurementId: "G-27PL97YNK7",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
