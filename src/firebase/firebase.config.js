// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_hNemBaa26v7f68YTO4N1GgYEqdqSLhI",
    authDomain: "alpaago-task-f615d.firebaseapp.com",
    projectId: "alpaago-task-f615d",
    storageBucket: "alpaago-task-f615d.appspot.com",
    messagingSenderId: "825341229415",
    appId: "1:825341229415:web:2382e24a3ee7a0ba3617c2"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;


