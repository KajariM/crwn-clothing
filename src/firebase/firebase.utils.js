import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB6jLTypYPjDWl952n9dGhheU6gwM13dRQ",
  authDomain: "crwn-react-project-be05f.firebaseapp.com",
  projectId: "crwn-react-project-be05f",
  storageBucket: "crwn-react-project-be05f.appspot.com",
  messagingSenderId: "874157346068",
  appId: "1:874157346068:web:48c6c10775f430e2fc4601",
  measurementId: "G-5NBD156238",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {return;}
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();
  console.log(snapshot);
  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error at creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
