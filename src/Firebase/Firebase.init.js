// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkYRlsKF2NJFWTDdmKumJv3yANnUpl98k",
    authDomain: "email-password-auth-aafe2.firebaseapp.com",
    projectId: "email-password-auth-aafe2",
    storageBucket: "email-password-auth-aafe2.firebasestorage.app",
    messagingSenderId: "553074334030",
    appId: "1:553074334030:web:67729a788448f56dc1661f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
