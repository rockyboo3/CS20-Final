import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";

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
    // alert(5);
    signInWithPopup(auth, provider).then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(user.displayName);
        console.log(user.email);
        console.log(user.uid);
        window.location.href = "https://rockyboo3.github.io/CS20-Final/homepage.html";
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
});