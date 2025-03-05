// src/lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCyWMkcaqN0pnPRpGOWdubUxkPdL0UyeaE",
    authDomain: "confirmaciones-de-boda.firebaseapp.com",
    projectId: "confirmaciones-de-boda",
    storageBucket: "confirmaciones-de-boda.firebasestorage.app",
    messagingSenderId: "25804580063",
    appId: "1:25804580063:web:60bca3aef6f0b8dc4c356a",
    measurementId: "G-3MW16137D9"
  };
  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore
export const db = getFirestore(app);
export { firebaseConfig };
