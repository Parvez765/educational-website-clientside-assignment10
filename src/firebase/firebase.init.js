// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeQHLZoLshiXFNol8QxE5ZEX-JkHGroHs",
  authDomain: "educational-website-e9520.firebaseapp.com",
  projectId: "educational-website-e9520",
  storageBucket: "educational-website-e9520.appspot.com",
  messagingSenderId: "1050587776392",
  appId: "1:1050587776392:web:557eb5432192227cf9663d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app