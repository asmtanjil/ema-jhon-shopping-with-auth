// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBy9sK-QmdN65JhIcj0M1zeD5pCgDDcHDQ",
  authDomain: "ema-john-simple-auth-a9b00.firebaseapp.com",
  projectId: "ema-john-simple-auth-a9b00",
  storageBucket: "ema-john-simple-auth-a9b00.appspot.com",
  messagingSenderId: "209797991181",
  appId: "1:209797991181:web:0d3dc382e1d0c6f801be44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;