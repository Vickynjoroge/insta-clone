// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDQG9I9eR3aaIMeTzb-r6b6U8ap853V6-g",
  authDomain: "insta-clone-40008.firebaseapp.com",
  projectId: "insta-clone-40008",
  storageBucket: "insta-clone-40008.appspot.com",
  messagingSenderId: "592923535899",
  appId: "1:592923535899:web:909176c00b5c8dd63866be",
  measurementId: "G-381V9S6R07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, auth, firestore, storage }