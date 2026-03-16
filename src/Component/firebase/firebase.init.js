// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhOGjKL1s_bEpL182BTjM4waOIIwG928o",
  authDomain: "coffee-store-app-c630d.firebaseapp.com",
  projectId: "coffee-store-app-c630d",
  storageBucket: "coffee-store-app-c630d.firebasestorage.app",
  messagingSenderId: "876909205924",
  appId: "1:876909205924:web:4e1ab7d5f523ab92918931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);