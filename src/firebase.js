// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage"
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCb4gH-npc1iBzhOQpsevIQiXOFWxH0dmA",
    authDomain: "highwall-web.firebaseapp.com",
    projectId: "highwall-web",
    storageBucket: "highwall-web.appspot.com",
    messagingSenderId: "114318319625",
    appId: "1:114318319625:web:c79f6e4137212c2ca598d8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const db = getFirestore(app);