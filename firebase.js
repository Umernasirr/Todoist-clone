import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyB_-XNaa2wj2xl0G1_3Szmik0M9sh5VDMk",
  authDomain: "todoist-clone-67146.firebaseapp.com",
  databaseURL:
    "https://todoist-clone-67146-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "todoist-clone-67146",
  storageBucket: "todoist-clone-67146.appspot.com",
  messagingSenderId: "396236673920",
  appId: "1:396236673920:web:550c087c616effbcdb2765",
  measurementId: "G-RTWE5LKM77",
});

export { firebaseConfig as firebase };
