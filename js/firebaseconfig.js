// Import the functions you need from the SDKs you need
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-app.js";
import {
    getAnalytics
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-analytics.js";
import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
 
const firebaseConfig = {
    apiKey: "AIzaSyCyyMySnVe5aqKj7OGiQBN98xoJh-RpUas",
    authDomain: "hackathon-d7c14.firebaseapp.com",
    databaseURL: "https://hackathon-d7c14-default-rtdb.firebaseio.com/",
  
    projectId: "hackathon-d7c14",
    storageBucket: "hackathon-d7c14.appspot.com",
    messagingSenderId: "374437049596",
    appId: "1:374437049596:web:77bc0a68492c8a31129379"

  };



// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);