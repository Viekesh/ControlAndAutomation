// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEz5Bm4C3wBpg5NgpeJVlbq-JOZHdINO8",
    authDomain: "eeaiiot.firebaseapp.com",
    projectId: "eeaiiot",
    storageBucket: "eeaiiot.appspot.com",
    messagingSenderId: "833646368550",
    appId: "1:833646368550:web:0df25a6e14ab055bad93e7",
    measurementId: "G-FJCG0JZBJL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);