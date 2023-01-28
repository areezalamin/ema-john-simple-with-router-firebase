// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqCFrJAvfv11s2VcYVvuCMicvlppjhdX0",
  authDomain: "ema-john-with-router-2dcb8.firebaseapp.com",
  projectId: "ema-john-with-router-2dcb8",
  storageBucket: "ema-john-with-router-2dcb8.appspot.com",
  messagingSenderId: "347488309960",
  appId: "1:347488309960:web:84a4c45395d6a626480bfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;