import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYzACqEo7kynFGj_QKAjDc2p-EhnM-v0Y",
    authDomain: "xstore-92b74.firebaseapp.com",
    projectId: "xstore-92b74",
    storageBucket: "xstore-92b74.firebasestorage.app",
    messagingSenderId: "1073232439172",
    appId: "1:1073232439172:web:b59f060d44b6bb45565fd1",
    measurementId: "G-M3VX16RYJB"
};

// App initialization
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);



