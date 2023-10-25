// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-9b841.firebaseapp.com",
  projectId: "mern-estate-9b841",
  storageBucket: "mern-estate-9b841.appspot.com",
  messagingSenderId: "338927450098",
  appId: "1:338927450098:web:8eabcfed651fd872e8dd6b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
