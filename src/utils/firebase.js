// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx15aoobGDVHMHP6naFuq1Gw3zKkWDLzY",
  authDomain: "netflixgpt2-dd44b.firebaseapp.com",
  projectId: "netflixgpt2-dd44b",
  storageBucket: "netflixgpt2-dd44b.appspot.com",
  messagingSenderId: "687807843448",
  appId: "1:687807843448:web:a19a82d9c728bb9849318d",
  measurementId: "G-2YBTB2G40Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

