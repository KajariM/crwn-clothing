import firebase from "firebase/app";
import "firebase/firestore";

const firestore = firebase.storage();

firestore.collection("users");
