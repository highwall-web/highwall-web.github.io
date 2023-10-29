// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCb4gH-npc1iBzhOQpsevIQiXOFWxH0dmA",
    authDomain: "highwall-web.firebaseapp.com",
    projectId: "highwall-web",
    storageBucket: "highwall-web.appspot.com",
    messagingSenderId: "114318319625",
    appId: "1:114318319625:web:c79f6e4137212c2ca598d8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;