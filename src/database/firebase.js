import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyA8Wms1px3gKBJ39R-D9GvXnsZk65QpY4o",
    authDomain: "twitter-clone-c6529.firebaseapp.com",
    projectId: "twitter-clone-c6529",
    storageBucket: "twitter-clone-c6529.appspot.com",
    messagingSenderId: "633523898387",
    appId: "1:633523898387:web:f9d25f3c7f6f3f2bd717e6",
    measurementId: "G-BYEJF9NRWM"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const db = firebase.firestore();

export default db;