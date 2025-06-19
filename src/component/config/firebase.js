

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrIS0T-xIeaeTvFHQ_7kiID0663LCnoGY",
  authDomain: "questionbank-ec02f.firebaseapp.com",
  projectId: "questionbank-ec02f",
  storageBucket: "questionbank-ec02f.firebasestorage.app",
  messagingSenderId: "1070660732581",
  appId: "1:1070660732581:web:7462d357b3c7c8168a6f4c",
  measurementId: "G-PESYGNDFDH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db=getFirestore(app);
export const storage = getStorage(app);

