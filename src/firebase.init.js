// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAORPBvVYXkA8b6qr51MFiSyaqfr7gqes",
    authDomain: "it-warehouse-b570d.firebaseapp.com",
    projectId: "it-warehouse-b570d",
    storageBucket: "it-warehouse-b570d.appspot.com",
    messagingSenderId: "155439064002",
    appId: "1:155439064002:web:b260671ea7c3f02577ec5b",
 };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;