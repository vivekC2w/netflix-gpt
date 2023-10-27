// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1jJXcyF4pO9cQDioGCDfmEYBZidOKtIM",
  authDomain: "netflixgpt-16014.firebaseapp.com",
  projectId: "netflixgpt-16014",
  storageBucket: "netflixgpt-16014.appspot.com",
  messagingSenderId: "904507635689",
  appId: "1:904507635689:web:7bc1fde84b7cd62d773d78",
  measurementId: "G-PV53Q6RBPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();