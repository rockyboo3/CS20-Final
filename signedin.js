// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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

const user = auth.currentUser;

function updateUserProfile(user) {
    const username = user.displayName;

    document.getElementById("username").textContent = username;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        updateUserProfile(user);
    } else {
        alert ("Create Account and Login");
        // redirect to create account ?
    }
});