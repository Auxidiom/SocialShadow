// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBL13Z72loFvL5bs5ufEtzaQSukhcb-Ioo",
    authDomain: "socialshadow-7e270.firebaseapp.com",
    projectId: "socialshadow-7e270",
    storageBucket: "socialshadow-7e270.appspot.com",
    messagingSenderId: "200544451269",
    appId: "1:200544451269:web:2f4209094b393084cdceac",
    measurementId: "G-5S77P35G9Z"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {auth};

export default db;