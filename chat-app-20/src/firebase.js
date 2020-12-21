import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAVTNwkQ92eL3H8G57UyEqyPLKQ18bngZ4",
  authDomain: "chat-app-20-84c66.firebaseapp.com",
  projectId: "chat-app-20-84c66",
  storageBucket: "chat-app-20-84c66.appspot.com",
  messagingSenderId: "747418035039",
  appId: "1:747418035039:web:e55530cbc13f2e65300cea",
  measurementId: "G-B2R0MCF1GT"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default firebase;
