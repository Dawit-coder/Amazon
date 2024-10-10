// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBjTk9lI5kZUe-T6PHyM8bjYgQj2uYJQio",
  authDomain: "clone-c587f.firebaseapp.com",
  projectId: "clone-c587f",
  storageBucket: "clone-c587f.appspot.com",
  messagingSenderId: "1021398493941",
  appId: "1:1021398493941:web:781fb74a75a7586141b3bc"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();