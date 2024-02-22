// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SD Ks for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnb5Hge3QG7wlvXLsgOh3uXwymh2YLhno",
  authDomain: "telmed-415116.firebaseapp.com",
  projectId: "telmed-415116",
  storageBucket: "telmed-415116.appspot.com",
  messagingSenderId: "692422495423",
  appId: "1:692422495423:web:7ea9b9e5d4787061758a0a",
  measurementId: "G-DQ0BE2Z1LK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);

export default {app,auth}

