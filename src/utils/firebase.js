// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2WYhYV1UtjfPFypsfKleiU20sv-0F5aA",
  authDomain: "netflixgpt-df784.firebaseapp.com",
  projectId: "netflixgpt-df784",
  storageBucket: "netflixgpt-df784.appspot.com",
  messagingSenderId: "438431489516",
  appId: "1:438431489516:web:b63717662dce63aae7f4c9",
  measurementId: "G-J92KZSD4Y9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// sss@gmail.com
// pass: Bilu@9038

// gg@gmail.com 
// hh@gmail.com