// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUnBXXW2f6rAzFnGAD7ODqfwhc_7AikfI",
  authDomain: "firestore-rupali.firebaseapp.com",
  projectId: "firestore-rupali",
  storageBucket: "firestore-rupali.appspot.com",
  messagingSenderId: "791860168989",
  appId: "1:791860168989:web:8d75d35e5c2632cff1f9f4",
  measurementId: "G-NLZ3CZPE1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
