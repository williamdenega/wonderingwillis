// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC3lEQbakjtrz3USIDBdJW8UQlwmAGeDE",
  authDomain: "wonderingwillis-f0e21.firebaseapp.com",
  projectId: "wonderingwillis-f0e21",
  storageBucket: "wonderingwillis-f0e21.appspot.com",
  messagingSenderId: "608708318515",
  appId: "1:608708318515:web:1530d0d2be73f8944f1a46",
  measurementId: "G-790LRNWMW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


export const db = getFirestore(app)
export const auth = getAuth(app)
console.log(auth)
export const provider = new GoogleAuthProvider();