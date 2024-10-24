// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore from the modular SDK

const firebaseConfig = {
  apiKey: "AIzaSyBjTk9lI5kZUe-T6PHyM8bjYgQj2uYJQio",
  authDomain: "clone-c587f.firebaseapp.com",
  projectId: "clone-c587f",
  storageBucket: "clone-c587f.appspot.com",
  messagingSenderId: "1021398493941",
  appId: "1:1021398493941:web:781fb74a75a7586141b3bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); // Correctly initialize Firebase

// Get Auth and Firestore instances
export const auth = getAuth(app);
export const db = getFirestore(app); // Use the modular Firestore method
