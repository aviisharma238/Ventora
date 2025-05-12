// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApmA3qW7mvlRhqoFzzc8BRL8lmtlNQwmE",
  authDomain: "ventora-f3dcc.firebaseapp.com",
  projectId: "ventora-f3dcc",
  storageBucket: "ventora-f3dcc.firebasestorage.app",
  messagingSenderId: "705342233042",
  appId: "1:705342233042:web:4ddc1206a788e84d60d00b",
  measurementId: "G-0YMGX3TT1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);