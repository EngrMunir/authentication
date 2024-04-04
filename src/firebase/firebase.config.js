// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4M3iWtR5IFEsMeYl9UPfLbizIp8Cc8Ik",
  authDomain: "authentication-2f435.firebaseapp.com",
  projectId: "authentication-2f435",
  storageBucket: "authentication-2f435.appspot.com",
  messagingSenderId: "1081978352783",
  appId: "1:1081978352783:web:a87efa56be9069afd1ecfa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;