// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1da06.firebaseapp.com",
  projectId: "mern-estate-1da06",
  storageBucket: "mern-estate-1da06.appspot.com",
  messagingSenderId: "354884592307",
  appId: "1:354884592307:web:b09a9015ba96659ae4c6c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);