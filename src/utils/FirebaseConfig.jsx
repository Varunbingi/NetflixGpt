// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYRlApKtur00yR0GMsBmTLsAjL0Gl_gFA",
  authDomain: "netflixgpt-94e3e.firebaseapp.com",
  projectId: "netflixgpt-94e3e",
  storageBucket: "netflixgpt-94e3e.appspot.com",
  messagingSenderId: "589682025104",
  appId: "1:589682025104:web:4b4a1018442e7b4a336e15",
  measurementId: "G-FRP8RSWSS6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();