// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "expense-tracker-9940f.firebaseapp.com",
  projectId: "expense-tracker-9940f",
  storageBucket: "expense-tracker-9940f.appspot.com",
  messagingSenderId: "308434762006",
  appId: "1:308434762006:web:9e8acdb80841b410eef837",
  measurementId: "G-BV1YE1Y5BJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider= new GoogleAuthProvider();
export const db = getFirestore(app);