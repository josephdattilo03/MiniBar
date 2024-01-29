// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ8qHH6WS1PSzLgDFNg5NHnJDai2E1pcE",
  authDomain: "minibar-25313.firebaseapp.com",
  projectId: "minibar-25313",
  storageBucket: "minibar-25313.appspot.com",
  messagingSenderId: "666725243025",
  appId: "1:666725243025:web:f1978e0f52031a3f65c730",
  measurementId: "G-6WRWLM7HFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export {db, auth}