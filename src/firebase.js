// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_API_KEY,
  authDomain: "personal-project-7b772.firebaseapp.com",
  projectId: "personal-project-7b772",
  storageBucket: "personal-project-7b772.appspot.com",
  messagingSenderId: "103708086927",
  appId: "1:103708086927:web:b7156fa9b56e8cba71d6fa",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
