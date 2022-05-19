import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyCiNvc7I6UWGYG_q7bGCNDHuycP6HmD2Uw",
  authDomain: "crown-db-5f9dc.firebaseapp.com",
  projectId: "crown-db-5f9dc",
  storageBucket: "crown-db-5f9dc.appspot.com",
  messagingSenderId: "755257656847",
  appId: "1:755257656847:web:a744d12305c70c6991857a",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
