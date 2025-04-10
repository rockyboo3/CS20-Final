// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9CyXZ43DTuY1_Hbb7bAiBnvwlEiYpeY4",
    authDomain: "cs20-final-3454a.firebaseapp.com",
    projectId: "cs20-final-3454a",
    storageBucket: "cs20-final-3454a.firebasestorage.app",
    messagingSenderId: "171629435211",
    appId: "1:171629435211:web:d2f2a60b26d02df0f3b0ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const googleLogin = document.getElementById("sign_in_button");
googleLogin.addEventListener("click", function() {
    alert(5);
});